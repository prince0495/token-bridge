import { reverseTokenMap, tokenMap } from "./lib/mappings";
import { prisma } from "./lib/prisma";
import { polygonQueue, sepoliaQueue } from "./lib/redis";
import { BurntLog, DepositLog } from "./lib/types";
import { burntOnPolygon, depositOnSepolia } from "./lib/utils";

export const startSepoliaQueueProccessor = () => {
    sepoliaQueue.process( async (job) => {
        try {
            const deposit_event: DepositLog = job.data;
            const deposit = await prisma.deposit.findUnique({
                where: {
                    txHash: deposit_event.txHash
                }
            });
            if(deposit && deposit.isDone) {
                console.log('Already proccessed this event of sepolia queue');
                console.log(deposit_event);
                return;
            }

            const wrappedTokenAddress = tokenMap.get(deposit_event.tokenAddress);
            if(!wrappedTokenAddress) {
                console.log("Invalid token, can't bridge assets for this token!");
                return;
            }
            
            await depositOnSepolia(deposit_event.depositer, wrappedTokenAddress, BigInt(deposit_event.amount), BigInt(deposit_event.nonce));

            await prisma.deposit.upsert({
                where: { txHash: deposit_event.txHash },
                create: {
                    txHash: deposit_event.txHash,
                    depositer: deposit_event.depositer,
                    tokenAddress: deposit_event.tokenAddress,
                    amount: deposit_event.amount.toString(),
                    nonce: deposit_event.nonce,
                    isDone: true,
                },
                update: {
                    depositer: deposit_event.depositer,
                    tokenAddress: deposit_event.tokenAddress,
                    amount: deposit_event.amount.toString(),
                    nonce: deposit_event.nonce,
                    isDone: true,
                }
            });
        } catch (error) {
            console.log('Error occured while proccesssing sepolia event from the queue');
            console.log(`${error}`);
        }
    })
}

export const startPolygonQueueProccessor = () => {
    polygonQueue.process( async (job) => {
        try {
            const burn_event: BurntLog = job.data;
            const burn = await prisma.burn.findUnique({
                where: {
                    txHash: burn_event.txHash
                }
            });
            if(burn && burn.isDone) {
                console.log('Already proccessed this event of polygon queue');
                console.log(burn_event);
                return;
            }
            
            const tokenAddress = reverseTokenMap.get(burn_event.tokenAddress);
            if(!tokenAddress) {
                console.log("Invalid token, can't bridge back assets for this token!");
                return;
            }

            await burntOnPolygon(burn_event.burner, tokenAddress, BigInt(burn_event.amount), BigInt(burn_event.nonce));

            await prisma.burn.upsert({
                where: { txHash: burn_event.txHash },
                create: {
                    txHash: burn_event.txHash,
                    burner: burn_event.burner,
                    tokenAddress: burn_event.tokenAddress,
                    amount: burn_event.amount.toString(),
                    nonce: burn_event.nonce,
                    isDone: true,
                },
                update: {
                    burner: burn_event.burner,
                    tokenAddress: burn_event.tokenAddress,
                    amount: burn_event.amount.toString(),
                    nonce: burn_event.nonce,
                    isDone: true,
                }
            });
        } catch (error) {
            console.log('Error occured while proccessing polygon event from the queue');
            console.log(`${error}`);
        }
    })
}