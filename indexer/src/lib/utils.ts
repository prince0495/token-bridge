import { Contract, ethers, JsonRpcProvider } from "ethers";
import { polygonBridgeABI, sepoliaBridgeABI } from "../contracts/abi";

export const providerSepolia = new JsonRpcProvider(process.env.ETHEREUM_SEPOLIA);
export const providerPolygon = new JsonRpcProvider(process.env.POLYGON_AMOY_TESTNET);

const walletSepolia = new ethers.Wallet(process.env.PRIVATE_KEY!, providerSepolia);
const walletPolygon = new ethers.Wallet(process.env.PRIVATE_KEY!, providerPolygon);

export const readContractSepolia = new ethers.Contract(
    process.env.SEPOLIA_BRIDGE_CONTRACT!,
    sepoliaBridgeABI,
    providerSepolia
);
export const writeContractSepolia = readContractSepolia.connect(walletSepolia);

export const readContractPolygon = new ethers.Contract(
    process.env.POLYGON_BRIDGE_CONTRACT!,
    polygonBridgeABI,
    providerPolygon
);
export const writeContractPolygon = readContractPolygon.connect(walletPolygon);


export const depositOnSepolia = async(userAddress: string, tokenAddress: string, amount: bigint, nonce: bigint) => {

    const tx = writeContractPolygon.getFunction("depositedOnSepolia");
    await tx(
        userAddress,
        tokenAddress,
        amount,
        nonce
    );
}

export const burntOnPolygon = async(userAddress: string, tokenAddress: string, amount: bigint, nonce: bigint) => {
    const tx = writeContractSepolia.getFunction("burnedOnPolygon");
    await tx (
        userAddress,
        tokenAddress,
        amount,
        nonce
    );
}