import "dotenv/config"
import { JsonRpcProvider } from "ethers";
import { ethers } from "ethers";
import { polygonBridgeABI, sepoliaBridgeABI } from "../contracts/abi.js";
import { listenToSepolia } from "./event-listener.js";

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!);

const providerSepolia = new JsonRpcProvider(process.env.ETHEREUM_SEPOLIA);
const providerPolygon = new JsonRpcProvider(process.env.POLYGON_AMOY_TESTNET);

const readContractSepolia = new ethers.Contract(
    process.env.SEPOLIA_BRIDGE_CONTRACT!,
    sepoliaBridgeABI,
    providerSepolia
);
const writeContractSepolia = readContractSepolia.connect(wallet);

const readContractPolygon = new ethers.Contract(
    process.env.POLYGON_BRIDGE_CONTRACT!,
    polygonBridgeABI,
    providerPolygon
);
const writeContractPolygon = readContractPolygon.connect(wallet);

listenToSepolia(providerSepolia, readContractSepolia);