
import "dotenv/config"
import { listenToPolygon, listenToSepolia } from "./event-listener";
import { startPolygonQueueProccessor, startSepoliaQueueProccessor } from "./processor";

const main = async () => {
    console.log("Starting worker");

    // These are the workers that call the blockchains to alert them for events that occuring on other chains.
    // Here we can customizably increase the number of workers to balance the load on a chain dividing load across multiple workers to increase speed of execution.
    startSepoliaQueueProccessor();
    startPolygonQueueProccessor();

    setInterval(() => {
        console.log("worker alive");    // To give you intuition that it's alive and working
    }, 10000);
    // Here we are listening for events via logs on Sepolia and Polygon chains to index and sync chain with out database.
    // To keep it beginner friendly and easy to grasp, I have kept the logic to listen to chain every 5 seconds
    // Ideally you should always look for the new blocks as soon as possible. In my approach the some blocks may not be proccessed.
    // Here instead of polling you should use websockets for better efficieny and ideally proccess all blocks from genesis to latest block without leaving any block behind.
    setInterval(() => listenToSepolia(), 5000);
    setInterval(() => listenToPolygon(), 5000);
};

main().catch(console.error);