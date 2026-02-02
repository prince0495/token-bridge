import { RainbowButton } from "./ui/rainbow-button";
import { TypingAnimation } from "./ui/typing-animation";
import { cn } from "../lib/utils";
import { useBridgeStore } from "@/lib/store";

export const BridgeHome = () => {
  const { setScreen } = useBridgeStore();

  return (
    <>
    <div className="relative flex h-[86vh] w-full flex-col items-center justify-center overflow-hidden">      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <main className="z-10 flex flex-col items-center text-center px-6">
        <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 backdrop-blur-xl">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-200/70">
            Cross-Chain Active • v1.0
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4">
          BRIDGE <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-indigo-600">PROTOCOL</span>
        </h1>

        <div className="max-w-2xl mb-10">
          <TypingAnimation 
            duration={40} 
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed"
          >
            Seamlessly move assets across premier blockchain networks. Zero-slippage, instant finality, and institutional-grade security for the multi-chain era.
          </TypingAnimation>
        </div>

        <div className="group relative">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-20 blur-xl transition duration-1000 group-hover:opacity-60 group-hover:duration-200" />
          <RainbowButton 
            onClick={() => setScreen('sepolia')}
            className="relative h-16 px-14 text-xl font-bold uppercase tracking-widest rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.2)] border border-white/10"
          >
            Enter Bridge
          </RainbowButton>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 border-t border-white/5 pt-12">
          <Stat label="Total Volume" value="$420.5M" color="text-cyan-400" />
          <Stat label="Avg. Bridge Time" value="~2.5m" color="text-white" />
          <Stat label="Supported Chains" value="12+" color="text-indigo-400" className="hidden md:flex" />
        </div>
      </main>

      <div className="absolute bottom-10 flex items-center gap-4 text-[9px] text-gray-500 uppercase tracking-[0.6em] font-mono">
        <span>Immutable</span>
        <span className="h-1 w-1 rounded-full bg-gray-800" />
        <span>Non-Custodial</span>
        <span className="h-1 w-1 rounded-full bg-gray-800" />
        <span>Verified</span>
      </div>
    </div>
    </>
  );
};

const Stat = ({ label, value, color, className }: { label: string; value: string; color: string; className?: string }) => (
  <div className={cn("flex flex-col items-center gap-2", className)}>
    <span className="text-[9px] text-gray-500 uppercase font-black tracking-[0.3em]">{label}</span>
    <span className={cn("text-3xl font-mono font-bold tracking-tight", color)}>{value}</span>
  </div>
);