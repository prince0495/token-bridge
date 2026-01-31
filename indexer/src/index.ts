
import "dotenv/config"
import { listenToSepolia } from "./event-listener";
import { startSepoliaQueueProccessor } from "./processor";

setTimeout(() => {
    listenToSepolia();
}, 5000)

startSepoliaQueueProccessor();