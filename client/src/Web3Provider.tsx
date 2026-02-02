import { WagmiProvider, createConfig, http } from "wagmi";
import { polygonAmoy, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import type { ReactNode } from "react";

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [sepolia, polygonAmoy],
    transports: {
      // RPC URL for each chain
      [sepolia.id]: http(
        `${import.meta.env.VITE_SEPOLIA_RPC}`,
      ),
      [polygonAmoy.id]: http(
        `${import.meta.env.VITE_POLYGON_RPC}`
      )
    },

    // Required API Keys
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,

    // Required App Info
    appName: "Croxx",

    // Optional App Info
    appDescription: "Croxx is a client that allows user to bridge assets from ethereum sepolia to polygon amoy blockchain or vice versa. It allows users to purchase some ERC20 tokens and move them from seplia to amoy testnet.",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};