import Queue from "bull";

const opts = {
    defaultJobOptions: {
        attempts: 5,
        backoff: {type: "exponential", delay: 2000},
        removeOnComplete: true
    }
}

export const sepoliaQueue = new Queue('sepolia-indexer', process.env.REDIS_URL!, opts);
export const polygonQueue = new Queue('polygon-indexer', process.env.REDIS_URL!, opts);