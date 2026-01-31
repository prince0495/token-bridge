import { prisma } from "./lib/prisma";
import { sepoliaQueue } from "./lib/redis";
import { DepositLog } from "./lib/types";
import { burntOnSepolia } from "./lib/utils";

export const startSepoliaQueueProccessor = () => {
    sepoliaQueue.process( async(job) => {
        try {
            // const deposit_event: DepositLog = job.data;
            const deposit_event = job.data;
            console.log('processing event : ', deposit_event);
            // const deposit = await prisma.deposit.findUnique({
            //     where: {
            //         txHash: deposit_event.txHash
            //     }
            // });
            // if(deposit && deposit.isDone) {
            //     return;
            // }
            
            // await burntOnSepolia(deposit_event.depositer, deposit_event.tokenAddress, BigInt(deposit_event.amount), BigInt(deposit_event.nonce));

            // await prisma.deposit.upsert({
            //     where: { txHash: deposit_event.txHash },
            //     create: {
            //         txHash: deposit_event.txHash,
            //         depositer: deposit_event.depositer,
            //         tokenAddress: deposit_event.tokenAddress,
            //         amount: deposit_event.amount.toString(),
            //         nonce: deposit_event.nonce,
            //         isDone: true
            //     },
            //     update: {
            //         depositer: deposit_event.depositer,
            //         tokenAddress: deposit_event.tokenAddress,
            //         amount: deposit_event.amount.toString(),
            //         nonce: deposit_event.nonce,
            //         isDone: true
            //     }
            // });
        } catch (error) {
            console.log(error);
        }
    })
}