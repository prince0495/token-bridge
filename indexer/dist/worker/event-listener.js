import { Network } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.js";
import "dotenv/config";
export const listenToSepolia = async (provider, contract) => {
    const lastBlock = await prisma.networkStatus.findUnique({
        where: {
            network: Network.SEPOLIA
        }
    });
    const fromBlock = lastBlock ? (lastBlock.lastProcessedBlock + 1) : Number(process.env.SEPOLIA_CONTRACT_GENESIS);
    const toBlock = await provider.getBlockNumber();
    const filter = contract.filters.Deposit();
    const logs = await provider.getLogs({
        ...filter,
        fromBlock: fromBlock,
        toBlock: toBlock
    });
    console.log(`filter : ${filter}`);
    console.log(`logs : ${logs}`);
};
//# sourceMappingURL=event-listener.js.map