import { useBridgeStore } from "@/lib/store";
import { ConnectWalletCard } from "./wallet-connect";
import { formatUnits, parseEther, type Address } from "viem";
import { useBalance, useChainId, useReadContract, useSwitchChain, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useEffect, useState } from "react";
import { polygonAmoy } from "viem/chains";
import { Flame, Coins } from "lucide-react";
import FloatingLines from "./ui/FloatingLines";
import { toast } from "sonner";
import { polygonBridgeABI } from "@/contracts/abi";

const worcaContractAddress = import.meta.env.VITE_WORCA_CONTRACT! as Address;
const wdonkContractAddress = import.meta.env.VITE_WDONK_CONTRACT! as Address;
const woggyContractAddress = import.meta.env.VITE_WOGGY_CONTRACT! as Address;
const polygonBridgeContract = import.meta.env.VITE_POLYGON_BRIDGE_CONTRACT! as Address;

const POLYGON_TOKENS = [
  { name: "WORCA", address: worcaContractAddress },
  { name: "WDONK", address: wdonkContractAddress },
  { name: "WOGGY", address: woggyContractAddress },
];

export const PolygonBridge = ({ address }: { address: Address }) => {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const isOnPolygon = chainId === polygonAmoy.id;
  const [activeTab, setActiveTab] = useState<'withdraw' | 'bridge'>('withdraw');
  const [selectedToken, setSelectedToken] = useState(POLYGON_TOKENS[0]);
  const [withdrawAmount, setWithdrawAmount] = useState<string | undefined>(undefined);
  const [burnAmount, setBurnAmount] = useState<string | undefined>(undefined);

  const { data:withdrawHash, writeContract: withdrawWriteContract, isPending: withdrawIsPending, isError: withdrawIsError, error: withdrawError } = useWriteContract();
    const { isLoading: withdrawTxIsLoading, isSuccess: withdrawTxIsSuccess, isError: withdrawTxIsError, error: withdrawTxError } = useWaitForTransactionReceipt({hash: withdrawHash});
    console.log(withdrawTxIsLoading);
    

  const { data:burnHash, writeContract: burnWriteContract, isPending: burnIsPending, isError: burnIsError, error: burnError } = useWriteContract();
    const { isLoading: burnTxIsLoading, isSuccess: burnTxIsSuccess, isError: burnTxIsError, error: burnTxError } = useWaitForTransactionReceipt({hash: burnHash});
    console.log(burnTxIsLoading);

  const balance = useBalance({address: address});
  const { data:worcaBalance } = useReadContract({
    address: import.meta.env.VITE_WORCA_CONTRACT! as Address,
    abi: [{
      type: 'function',
      name: 'balanceOf',
      stateMutability: 'view',
      inputs: [{ name: 'account', type: 'address' }],
      outputs: [{ type: 'uint256' }],
    }],
    functionName: 'balanceOf',
    args: [address]
  });
  const { data:wdonkBalance } = useReadContract({
    address: import.meta.env.VITE_WDONK_CONTRACT! as Address,
    abi: [{
      type: 'function',
      name: 'balanceOf',
      stateMutability: 'view',
      inputs: [{ name: 'account', type: 'address' }],
      outputs: [{ type: 'uint256' }],
    }],
    functionName: 'balanceOf',
    args: [address]
  });
  const { data:woggyBalance } = useReadContract({
    address: import.meta.env.VITE_WOGGY_CONTRACT! as Address,
    abi: [{
      type: 'function',
      name: 'balanceOf',
      stateMutability: 'view',
      inputs: [{ name: 'account', type: 'address' }],
      outputs: [{ type: 'uint256' }],
    }],
    functionName: 'balanceOf',
    args: [address]
  });

  useEffect(() => {
    if (!isOnPolygon) {
      switchChain({ chainId: polygonAmoy.id });
    }
  }, [isOnPolygon, switchChain]);

  const handleWithdraw = () => {
    if(!withdrawAmount || withdrawAmount.length === 0) {
      toast.warning("Enter amount to be withdrawn!");
      return;
    }
    withdrawWriteContract({
      address: polygonBridgeContract,
      abi: polygonBridgeABI,
      functionName: 'withdraw',
      args: [ selectedToken.address, parseEther(withdrawAmount)]
    });

    //TODO: later toast on success
  }
  const handleBurn = () => {
    if(!burnAmount) {
      toast.warning("Enter amount to be bridged back!");
      return;
    }
    burnWriteContract({
      address: polygonBridgeContract,
      abi: polygonBridgeABI,
      functionName: 'burn',
      args: [ selectedToken.address, parseEther(burnAmount)]
    });

    //TODO: later toast on success
  }

  const handleClick = () => {
    if(activeTab === 'withdraw') {
      handleWithdraw();
    }
    else {
      handleBurn();
    }
  }

  useEffect(() => {
    if(withdrawIsError || withdrawTxIsError || burnIsError || burnTxIsError) {
      toast.error(`Error Occured : ${withdrawError || withdrawTxError || burnTxError || burnError}`);
    }
  }, [withdrawIsError, withdrawTxIsError, withdrawError, withdrawTxError, burnIsError, burnTxIsError, burnError, burnTxError])
  
  useEffect(() => {
    if(withdrawTxIsSuccess) {
      toast.success(`Successfully withdrawn wrapped token.\nTransaction has : ${withdrawHash}`);
      setWithdrawAmount('');
    }
  }, [withdrawTxIsSuccess, withdrawHash])
  useEffect(() => {
    if(burnTxIsSuccess) {
      toast.success(`Successfully burnt wrapped token and you can claim them in Sepolia.\nTransaction has : ${burnHash}`);
      setBurnAmount('');
    }
  }, [burnTxIsSuccess, burnHash])

  return (
    <div className="group relative w-full max-w-[440px]">
      {/* Glow highlight */}
      <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-b from-cyan-500/30 to-indigo-600/30 blur-xl opacity-100" />
      
      {/* Main Container */}
      <div className="relative flex flex-col rounded-[1.5rem] border border-white/10 bg-[#0a0a0b] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,1)]">
        
        {/* Header - Fixed Height */}
        <div className="p-6 border-b border-white/5 bg-white/[0.03]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                <Coins className="text-indigo-400" size={18} />
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white">Polygon Gateway</h2>
            </div>
            <div className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20 uppercase">
              Amoy Testnet
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[10px] uppercase text-gray-500 font-bold mb-1 tracking-wider">Amoy POL</p>
              <p className="text-sm font-mono text-white">{balance.data && balance.data.value && (Number(formatUnits(balance.data.value, 18)).toFixed(4))}</p>
            </div>
            
            {/* Enlarged Token Selector Dropdown */}
            <div className="relative p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 group/token">
              <div className="flex justify-between items-center mb-1">
                <p className="text-[10px] uppercase text-cyan-500/70 font-bold tracking-wider">Assets</p>
                <select 
                  className="bg-transparent text-[11px] font-bold text-white focus:outline-none cursor-pointer appearance-none text-right"
                  onChange={(e) => setSelectedToken(POLYGON_TOKENS.find(t => t.name === e.target.value)!)}
                  value={selectedToken.name}
                >
                  {POLYGON_TOKENS.map(t => (
                    <option key={t.name} value={t.name} className="bg-[#0a0a0b]">
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-sm font-mono text-cyan-400">{selectedToken.name === 'WORCA' ? (Number(formatUnits(worcaBalance ?? 0n, 18)  ).toFixed(4)): (selectedToken.name === 'WDONK' ? (Number(formatUnits(wdonkBalance ?? 0n, 18)).toFixed(4)): (Number(formatUnits(woggyBalance ?? 0n, 18)).toFixed(4)))} {selectedToken.name}</p>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1.5 bg-black gap-1">
          <button 
            onClick={() => setActiveTab('withdraw')}
            className={`flex-1 cursor-pointer py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'withdraw' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Withdraw
          </button>
          <button 
            onClick={() => setActiveTab('bridge')}
            className={`flex-1 cursor-pointer py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'bridge' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Bridge Back
          </button>
        </div>

        {/* Action Content - Fixed Height 260px */}
        <div className="p-6 h-[260px] flex flex-col justify-between bg-[#0a0a0b]">
          <div>
            {activeTab === 'withdraw' ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gray-500 font-bold ml-1 tracking-widest">Withdraw {selectedToken.name}</label>
                  <div className="relative">
                    <input value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} type="number" placeholder="0.00" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white font-mono focus:outline-none focus:border-cyan-500/50 text-sm" />
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 text-base text-center italic">Transaction will be processed on Polygon Amoy</p>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gray-500 font-bold ml-1 tracking-widest">Bridge {selectedToken.name} to Sepolia</label>
                  <div className="relative">
                    <input value={burnAmount} onChange={(e) => setBurnAmount(e.target.value)} type="number" placeholder="0.00" className="w-full bg-orange-500/5 border border-orange-500/10 rounded-xl py-4 px-4 text-white font-mono focus:outline-none focus:border-orange-500/50 text-sm" />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-bold text-orange-400 bg-orange-400/10 px-2 py-1 rounded">MAX</button>
                  </div>
                </div>
                <div className="p-3 bg-orange-500/5 border border-orange-500/10 rounded-lg flex items-center gap-3">
                   <Flame size={14} className="text-orange-500 animate-pulse" />
                   <span className="text-[10px] text-orange-200/70 leading-tight">This will burn {selectedToken.name} on Amoy to unlock them on Sepolia.</span>
                </div>
              </div>
            )}
          </div>

          <button 
            disabled={withdrawIsPending || withdrawTxIsLoading || burnIsPending || burnTxIsLoading}
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }} className={`w-full cursor-pointer py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${
            activeTab === 'withdraw' 
            ? 'bg-white text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(255,255,255,0.05)]' 
            : 'bg-orange-600 text-white hover:bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.2)]'
          }`}>
            {activeTab === 'withdraw' ? `Execute ${selectedToken.name} Withdrawal` : 'Start Bridge Protocol'}
          </button>
        </div>

        {/* Minimal Footer */}
        <div className="px-6 py-3 bg-white/[0.03] border-t border-white/5">
          <div className="flex justify-between items-center opacity-40">
            <span className="text-[9px] font-mono text-white/60 font-bold">Chain Id: {chainId}</span>
            <span className="text-[9px] font-mono text-white/60 truncate max-w-[150px]">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PolygonBridgeWrapper = () => {
  const { address, isConnected } = useBridgeStore();

  if (!address || !isConnected) {
    return (
       <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0"><FloatingLines enabledWaves={["top", "bottom"]} /></div>
          <div className="relative z-10"><ConnectWalletCard /></div>
       </div>
    );
  }

  return (
    <div className="relative h-[86vh] w-full flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full flex justify-center px-4">
        <PolygonBridge address={address} />
      </div>
    </div>
  );
};