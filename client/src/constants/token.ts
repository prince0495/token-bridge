import type { Address } from "viem";

const orcaContractAddress = import.meta.env.VITE_ORCA_CONTRACT! as Address;
const donkContractAddress = import.meta.env.VITE_DONK_CONTRACT! as Address;
const oggyContractAddress = import.meta.env.VITE_OGGY_CONTRACT! as Address;
const worcaContractAddress = import.meta.env.VITE_WORCA_CONTRACT! as Address;
const wdonkContractAddress = import.meta.env.VITE_WDONK_CONTRACT! as Address;
const woggyContractAddress = import.meta.env.VITE_WOGGY_CONTRACT! as Address;

export const TOKENS = [
  { sepoliaName: "ORCA", polygonName: "WORCA", sepoliaAddress: orcaContractAddress, polygonAddress: worcaContractAddress, price: 0.0042 },
  { sepoliaName: "DONK", polygonName: "WDONK", sepoliaAddress: donkContractAddress, polygonAddress: wdonkContractAddress, price: 0.0011 },
  { sepoliaName: "OGGY", polygonName: "WOGGY", sepoliaAddress: oggyContractAddress, polygonAddress: woggyContractAddress, price: 0.0011 },
];