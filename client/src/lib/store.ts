import { create } from 'zustand';
import { type Address } from "viem";
import { TOKENS } from '@/constants/token';

export type screenType = 'home' | 'sepolia' | 'polygon'

type tokenType = {
  sepoliaName: string;
  polygonName: string;
  sepoliaAddress: Address;
  polygonAddress: Address;
  price: number;
}

interface BridgeState {
  screen: screenType;
  address: Address | undefined;
  isConnected: boolean;
  selectedToken: tokenType;
  setSelectedToken: (token: tokenType) => void;
  setAddress: (address: Address | undefined) => void;
  setIsConnected: (bool: boolean) => void;
  setScreen: (screen: screenType) => void;
}

export const useBridgeStore = create<BridgeState>()((set) => ({
  screen: 'home',
  address: undefined,
  isConnected: false,
  selectedToken: TOKENS[0],
  setSelectedToken: (token: tokenType) => set({selectedToken: token}),
  setAddress: (address: Address | undefined) => set({ address: address }),
  setIsConnected: (bool: boolean) => set({ isConnected: bool }),
  setScreen: (screen: screenType) => set({screen: screen})
}))