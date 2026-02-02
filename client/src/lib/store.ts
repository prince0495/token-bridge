import { create } from 'zustand';
import { type Address } from "viem";

export type screenType = 'home' | 'sepolia' | 'polygon'

interface BridgeState {
  screen: screenType;
  address: Address | undefined;
  isConnected: boolean;
  setAddress: (address: Address | undefined) => void;
  setIsConnected: (bool: boolean) => void;
  setScreen: (screen: screenType) => void;
}

export const useBridgeStore = create<BridgeState>()((set) => ({
  screen: 'home',
  address: undefined,
  isConnected: false,
  setAddress: (address: Address | undefined) => set({ address: address }),
  setIsConnected: (bool: boolean) => set({ isConnected: bool }),
  setScreen: (screen: screenType) => set({screen: screen})
}))