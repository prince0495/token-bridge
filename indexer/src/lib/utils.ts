import { Contract, ethers, JsonRpcProvider } from "ethers";
import { polygonBridgeABI, sepoliaBridgeABI } from "../contracts/abi";

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!);

export const providerSepolia = new JsonRpcProvider(process.env.ETHEREUM_SEPOLIA);
export const providerPolygon = new JsonRpcProvider(process.env.POLYGON_AMOY_TESTNET);

export const readContractSepolia = new ethers.Contract(
    process.env.SEPOLIA_BRIDGE_CONTRACT!,
    sepoliaBridgeABI,
    providerSepolia
);
export const writeContractSepolia = readContractSepolia.connect(wallet);

export const readContractPolygon = new ethers.Contract(
    process.env.POLYGON_BRIDGE_CONTRACT!,
    polygonBridgeABI,
    providerPolygon
);
export const writeContractPolygon = readContractPolygon.connect(wallet);


export const burntOnSepolia = async(userAddress: string, tokenAddress: string, amount: bigint, nonce: bigint) => {
    const tx = writeContractPolygon.getFunction("depositedOnSepolia");
    await tx(
        userAddress,
        tokenAddress,
        amount,
        nonce
    );
    console.log('succesffully called polygon bridge contract');
}