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
    appName: "Bridge",

    // Optional App Info
    appDescription: "Your App Description",
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