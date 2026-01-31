import { getAddress } from "ethers";
import { prisma } from "./lib/prisma";
import { Network } from "@prisma/client";
import "dotenv/config"
import { sepoliaQueue } from "./lib/redis";
import { DepositLog } from "./lib/types";
import { providerSepolia, readContractSepolia } from "./lib/utils";

export const listenToSepolia = async() => {
    try {
        const provider = providerSepolia;
        const contract = readContractSepolia;

        const lastBlock = await prisma.networkStatus.findUnique({
            where: {
                network: Network.SEPOLIA
            }
        });
        // First deposit 10163286
        // const fromBlock: number = lastBlock ? (lastBlock.lastProcessedBlock + 1) : Number(process.env.SEPOLIA_CONTRACT_GENESIS!);
        // const toBlock: number = await provider.getBlockNumber();
        const fromBlock = 10163286;
        const toBlock = 10163286;
        const filter = (contract.filters as any).Deposit();
        const logs = await provider.getLogs({
            ...filter,
            fromBlock: fromBlock,
            toBlock: toBlock,
            address: process.env.SEPOLIA_BRIDGE_CONTRACT!
        });
        for (const log of logs) {
            const parsed = contract.interface.parseLog(log);
            if(parsed?.args && parsed.args.length === 4) {
                const depositer = getAddress(parsed.args[0] as string);
                const tokenAddress = getAddress(parsed.args[1] as string);
                const amount = BigInt(parsed.args[2]).toString();
                const nonce = Number(BigInt(parsed.args[3]));
                const txHash = log.transactionHash;
                const deposit_event: DepositLog = {depositer, tokenAddress, amount, nonce, txHash};
                console.log('pushed to queue');
                sepoliaQueue.add(deposit_event);
            }
        }
        
        await prisma.networkStatus.upsert({
            where: {
                network: Network.SEPOLIA
            },
            create: {
                network: Network.SEPOLIA,
                lastProcessedBlock: toBlock,
            },
            update: {
                lastProcessedBlock: toBlock
            }
        })
    } catch (error) {
        console.log('error occured while listing sepolia events');
        console.log(`${error}`);
    }
}
