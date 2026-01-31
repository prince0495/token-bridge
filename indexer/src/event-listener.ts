import { getAddress } from "ethers";
import { prisma } from "./lib/prisma";
import { Network } from "@prisma/client";
import { polygonQueue, sepoliaQueue } from "./lib/redis";
import { BurntLog, DepositLog } from "./lib/types";
import { providerPolygon, providerSepolia, readContractPolygon, readContractSepolia } from "./lib/utils";
import "dotenv/config"

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
        const fromBlock: number = lastBlock ? (lastBlock.lastProcessedBlock + 1) : Number(process.env.SEPOLIA_CONTRACT_GENESIS!);
        const toBlock: number = await provider.getBlockNumber();
        const filter = (contract.filters as any).Deposit();
        const logs = await provider.getLogs({
            ...filter,
            fromBlock: ((toBlock-fromBlock > 8) ? (toBlock-8) : fromBlock), // This logic is not for production purposes, but to save my money as free rpc providers like alchemy don't allow more than 10 block logs in a single query. You should definitely just go with fromBlock instead of this conditional logic, but if you are just testing it out for learning purposes or personal project ideas then please save your money with this logic.
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
                console.log('pushed to queue from sepolia indexer');
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
                lastProcessedBlock: toBlock,
            }
        })
    } catch (error) {
        console.log('Error occured while listening to sepolia events.');
        console.log(`${error}`);
    }
}

export const listenToPolygon = async() => {
    try {
        const provider = providerPolygon;
        const contract = readContractPolygon;

        const lastBlock = await prisma.networkStatus.findUnique({
            where: {
                network: Network.POLYGON_AMOY_TESTNET
            }
        });
        const fromBlock: number = lastBlock ? (lastBlock.lastProcessedBlock + 1) : Number(process.env.POLYGON_CONTRACT_GENESIS!);
        const toBlock: number = await provider.getBlockNumber();

        const filter = (contract.filters as any).Burnt();
        const logs = await provider.getLogs({
            ...filter,
            fromBlock: ((toBlock-fromBlock > 8) ? (toBlock-8) : fromBlock), // This logic is not for production purposes, but to save my money as free rpc providers like alchemy don't allow more than 10 block logs in a single query. You should definitely just go with fromBlock instead of this conditional logic, but if you are just testing it out for learning purposes or personal project ideas then please save your money with this logic.
            toBlock: toBlock,
            address: process.env.POLYGON_BRIDGE_CONTRACT!
        });
        for (const log of logs) {
            const parsed = contract.interface.parseLog(log);
            if(parsed?.args && parsed.args.length === 4) {
                const burner = getAddress(parsed.args[0] as string);
                const tokenAddress = getAddress(parsed.args[1] as string);
                const amount = BigInt(parsed.args[2]).toString();
                const nonce = Number(BigInt(parsed.args[3]));
                const txHash = log.transactionHash;
                const burn_event: BurntLog = {burner, tokenAddress, amount, nonce, txHash};
                console.log('pushed to queue from polygon indexer');
                polygonQueue.add(burn_event);
            }
        }

        await prisma.networkStatus.upsert({
            where: {
                network: Network.POLYGON_AMOY_TESTNET
            },
            create: {
                network: Network.POLYGON_AMOY_TESTNET,
                lastProcessedBlock: toBlock,
            },
            update: {
                lastProcessedBlock: toBlock,
            }
        })
    } catch (error) {
        console.log('Error occured while listening to polygon amoy events.');
        console.log(`${error}`);
    }
}