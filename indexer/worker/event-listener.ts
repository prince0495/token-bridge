import type { Contract } from "ethers";
import type { JsonRpcProvider } from "ethers";
import { Network } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.js";
import "dotenv/config"

export const listenToSepolia = async(
    provider: JsonRpcProvider,
    contract: Contract
) => {
    const lastBlock = await prisma.networkStatus.findUnique({
        where: {
            network: Network.SEPOLIA
        }
    });
    
    const fromBlock: number = lastBlock ? (lastBlock.lastProcessedBlock + 1) : Number(process.env.SEPOLIA_CONTRACT_GENESIS!);
    const toBlock: number = await provider.getBlockNumber();

    const filter = (contract.filters as any).Deposit();
    const logs = await provider.getLogs({
        ...filter,
        fromBlock: fromBlock,
        toBlock: toBlock
    });

    console.log(`filter : ${filter}`);
    console.log(`logs : ${logs}`);
    
}

