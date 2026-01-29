import Queue from "bull";
export const queue = new Queue('bridge-indexer', process.env.REDIS_URL);
//# sourceMappingURL=redis.js.map