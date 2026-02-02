import { useBridgeStore } from "@/lib/store";
import { ConnectWalletCard } from "./wallet-connect";
import { formatEther, formatUnits, parseEther, type Address } from "viem";
import { useBalance, useChainId, useReadContract, useSwitchChain, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useEffect, useState } from "react";
import { sepolia } from "viem/chains";
import { Landmark, ShoppingCart, X, CheckCircle2, Circle, AlertTriangle, ExternalLink, TrendingUp } from "lucide-react";
import FloatingLines from "./ui/FloatingLines";
import { toast } from "sonner";
import { donkABI, sepoliaBridgeABI } from "@/contracts/abi";

const orcaContractAddress = import.meta.env.VITE_ORCA_CONTRACT! as Address;
const donkContractAddress = import.meta.env.VITE_DONK_CONTRACT! as Address;
const oggyContractAddress = import.meta.env.VITE_OGGY_CONTRACT! as Address;
const sepoliaBridgeContract = import.meta.env.VITE_SEPOLIA_BRIDGE_CONTRACT as Address;


const TOKENS = [
  { name: "ORCA", address: orcaContractAddress, price: 0.0012 },
  { name: "DONK", address: donkContractAddress, price: 0.0008 },
  { name: "OGGY", address: oggyContractAddress, price: 0.0025 },
];

export const SepoliaBridge = ({ address }: { address: Address }) => {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const isOnSepolia = chainId === sepolia.id;
  
  const [activeTab, setActiveTab] = useState<'bridge' | 'withdraw'>('bridge');
  const [selectedToken, setSelectedToken] = useState(TOKENS[0]);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [buyAmount, setBuyAmount] = useState<string | undefined>(undefined);
  const [bridgeStep, setBridgeStep] = useState<'approve' | 'confirm'>('approve');
  const [approveAmount, setApproveAmount] = useState<string | undefined>(undefined);
  const [claimAmount, setClaimAmount] = useState<string | undefined>(undefined);

  const balance = useBalance({address: address});
  const { data:approveHash, writeContract: approveWriteContract, isPending: approveIsPending, isError: approveIsError, error: approveError } = useWriteContract();
  const { isLoading: approveTxIsLoading, isSuccess: approveTxIsSuccess, isError: approveTxIsError, error: approveTxError } = useWaitForTransactionReceipt({hash: approveHash});
  
  const { data:bridgeHash, writeContract: bridgeWriteContract, isPending: bridgeIsPending, isError: bridgeIsError, error: bridgeError } = useWriteContract();
  const { isLoading: bridgeTxIsLoading, isSuccess: bridgeTxIsSuccess, isError: bridgeTxIsError, error: bridgeTxError } = useWaitForTransactionReceipt({hash: bridgeHash});

  const { data:withdrawHash, writeContract: withdrawWriteContract, isPending: withdrawIsPending, isError: withdrawIsError, error: withdrawError } = useWriteContract();
  const { isLoading: withdrawTxIsLoading, isSuccess: withdrawTxIsSuccess, isError: withdrawTxIsError, error: withdrawTxError } = useWaitForTransactionReceipt({hash: withdrawHash});

  const { data:buyDonkHash, writeContract: buyDonkWriteContract, isPending: buyDonkIsPending, isError: buyDonkIsError, error: buyDonkError } = useWriteContract();
  const { isLoading: buyDonkTxIsLoading, isSuccess: buyDonkTxIsSuccess, isError: buyDonkTxIsError, error: buyDonkTxError } = useWaitForTransactionReceipt({hash: buyDonkHash});

  const { data:buyOggyHash, writeContract: buyOggyWriteContract, isPending: buyOggyIsPending, isError: buyOggyIsError, error: buyOggyError } = useWriteContract();
  const { isLoading: buyOggyTxIsLoading, isSuccess: buyOggyTxIsSuccess, isError: buyOggyTxIsError, error: buyOggyTxError } = useWaitForTransactionReceipt({hash: buyOggyHash});

  const { data:orcaBalance } = useReadContract({
    address: orcaContractAddress,
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
  const { data:donkBalance } = useReadContract({
    address: donkContractAddress,
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
  const { data:oggyBalance } = useReadContract({
    address: oggyContractAddress,
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
    if (!isOnSepolia) {
      switchChain({ chainId: sepolia.id });
    }
  }, [isOnSepolia, switchChain]);

  const isOrca = selectedToken.name === "ORCA";

  const handleBuy = () => {
    if(!buyAmount || buyAmount.length === 0) {
      toast.warning("Please enter some amount of ethereum");
      return;
    }
    else if(selectedToken.name === 'ORCA') {
      toast.warning("Cannot buy ORCA directly, either buy DONK or OGGY , or click on 'Earn ORCA' to stake ethereum to receive ORCA as reward");
      return;
    }
    else if(selectedToken.name === 'DONK') {
      buyDonkWriteContract({
        address: selectedToken.address,
        abi: donkABI,
        functionName: 'purchase',
        value: parseEther(buyAmount)
      })
    }
    else if(selectedToken.name === 'OGGY') {
      buyOggyWriteContract({
        address: selectedToken.address,
        abi: donkABI,   // Both are similar, just name and symbol is different so same abi can work for it
        functionName: 'purchase',
        value: parseEther(buyAmount)
      })
    }
  }

  const handleApprove = async() => {
    if(!approveAmount || approveAmount.length === 0) {
      toast.warning("Enter amount to be approved");
      return;
    }
    
    approveWriteContract({
      address: selectedToken.address,
      abi: [
        {
        constant: false,
        inputs: [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                "name": "",
                "type": "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
      ],
      functionName: 'approve',
      args: [sepoliaBridgeContract, parseEther(approveAmount)]
    })
  }

  const handleBridge = () => {
    if(!approveAmount || approveAmount.length === 0) {
      toast.warning("Enter valid amount to be briged!");
      return;
    }
    bridgeWriteContract({
      address: sepoliaBridgeContract,
      abi: sepoliaBridgeABI,
      functionName: 'deposit',
      args: [ selectedToken.address, parseEther(approveAmount)]
    });
    //TODO:set amount to be 0
  }

  const handleClaim = () => {
    if(!claimAmount || claimAmount.length === 0) {
      toast.warning("Enter the amount to be claimed!");
      return;
    }
    withdrawWriteContract({
      address: sepoliaBridgeContract,
      abi: sepoliaBridgeABI,
      functionName: 'withdraw',
      args: [selectedToken.address, parseEther(claimAmount)],
      gas: 300_000n
    });

    //TODO:setclaimamount to be 0 if proccessed
  }

  useEffect(() => {
    if(approveIsError || approveTxIsError || bridgeIsError  || bridgeTxIsError  || buyDonkIsError  || buyOggyIsError || buyDonkTxIsError || buyOggyTxIsError || withdrawIsError || withdrawTxIsError) {
      console.error('Unstake failed ', approveError || approveTxError || bridgeError || bridgeTxError || buyDonkError || buyDonkTxError || buyOggyError || buyOggyTxError || withdrawError, withdrawTxError);
      toast.error(`Error Occured : ${approveError || approveTxError || bridgeError || bridgeTxError || buyDonkError || buyDonkTxError || buyOggyError || buyOggyTxError || withdrawError || withdrawTxError}`);
    }
  }, [approveIsError, approveTxIsError, approveError, approveTxError, bridgeIsError, bridgeError, bridgeTxIsError, bridgeTxError, buyDonkIsError, buyDonkError, buyOggyIsError, buyOggyTxError, withdrawIsError, withdrawTxError, withdrawError, withdrawTxError])

  useEffect(() => {
    if(approveTxIsSuccess) {
      toast.success(`Successfully approved.\nTransaction hash: ${approveHash}`);
      setBridgeStep("confirm");
    }
  }, [approveTxIsSuccess, approveHash])
  useEffect(() => {
    if(bridgeTxIsSuccess) {
      toast.success(`Successfully bridged.\nTransaction hash: ${bridgeHash}`);
      setApproveAmount('');
    } 
  }, [bridgeTxIsSuccess, bridgeHash])
  useEffect(() => {
    if(withdrawTxIsSuccess) {
      toast.success(`Successfully withdrawn.\nTransaction hash: ${withdrawHash}`);
      setClaimAmount('');
    } 
  }, [withdrawTxIsSuccess, withdrawHash])

  useEffect(() => {
    if(buyDonkTxIsSuccess) {
      toast.success(`Successfully purchased Donk.\nTransaction hash: ${buyDonkHash}`);
      setBuyAmount('');
    }
  }, [buyDonkTxIsSuccess, buyDonkHash])
  useEffect(() => {
    if(buyOggyTxIsSuccess) {
      toast.success(`Successfully purchased Oggy.\nTransaction hash: ${buyOggyHash}`);
      setApproveAmount('');
    } 
  }, [buyOggyTxIsSuccess, buyOggyHash])


  return (
    <div className="group relative w-full max-w-[440px]">
      <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-b from-blue-500/30 to-purple-600/30 blur-xl opacity-100" />
      
      <div className="relative flex flex-col rounded-[1.5rem] border border-white/10 bg-[#0a0a0b] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,1)]">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-white/[0.03]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Landmark className="text-blue-400" size={18} />
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white">Sepolia Gateway</h2>
            </div>
            
            {isOrca ? (
              <a 
                href="https://stake-client.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-500/20 hover:bg-emerald-400/20 transition-all shadow-[0_0_10px_rgba(52,211,153,0.1)]"
              >
                <TrendingUp size={12} /> EARN ORCA
              </a>
            ) : (
              <button 
                onClick={() => setShowBuyModal(true)}
                className="flex cursor-pointer items-center gap-1.5 text-[9px] font-bold text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-500/20 hover:bg-blue-400/20 transition-all"
              >
                <ShoppingCart size={12} /> BUY TOKENS
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[10px] uppercase text-gray-500 font-bold mb-1 tracking-wider">ETH Balance</p>
              <p className="text-sm font-mono text-white">{balance.data && balance.data.value ? (Number(formatEther(balance.data.value)).toFixed(4)) : '0.0000'}</p>
            </div>
            <div className="relative p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 group/token">
              <div className="flex justify-between items-center mb-1">
                <p className="text-[10px] uppercase text-blue-500/70 font-bold tracking-wider">Assets</p>
                <select 
                  className="bg-transparent text-[11px] font-bold text-white focus:outline-none cursor-pointer appearance-none text-right"
                  onChange={(e) => setSelectedToken(TOKENS.find(t => t.name === e.target.value)!)}
                  value={selectedToken.name}
                >
                  {TOKENS.map(t => <option key={t.name} value={t.name} className="bg-[#0a0a0b] p-4">{t.name}</option>)}
                </select>
              </div>
              <p className="text-sm font-mono text-blue-400">{selectedToken.name === 'ORCA' ? (Number(formatUnits(orcaBalance ?? 0n, 18)  ).toFixed(4)): (selectedToken.name === 'DONK' ? (Number(formatUnits(donkBalance ?? 0n, 18)  ).toFixed(4)): (Number(formatUnits(oggyBalance ?? 0n, 18)  ).toFixed(4)))} {selectedToken.name}</p>
            </div>
          </div>
          
          {isOrca && (
            <div className="mt-3 px-1">
              <p className="text-[8px] text-emerald-500/60 font-medium text-2xl tracking-tight flex items-center gap-1">
                
                <a 
                href="https://stake-client.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-500/20 hover:bg-emerald-400/20 transition-all shadow-[0_0_10px_rgba(52,211,153,0.1)]"
              >
                <ExternalLink size={10} className="w-5 h-5 cursor-pointer" />
              </a>
              <span className="text-base">Stake ETH to earn ORCA rewards on the website.</span> 
              </p>
            </div>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1.5 bg-black gap-1">
          <button onClick={() => {setActiveTab('bridge'); setBridgeStep('approve');}} className={`flex-1 cursor-pointer py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'bridge' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-500 hover:text-gray-300'}`}>
            Bridge
          </button>
          <button onClick={() => setActiveTab('withdraw')} className={`flex-1 cursor-pointer py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'withdraw' ? 'bg-white/10 text-white shadow-inner' : 'text-gray-500 hover:text-gray-300'}`}>
            Claim back
          </button>
        </div>

        {/* Action Content */}
        <div className="relative p-6 h-[260px] flex flex-col justify-between bg-[#0a0a0b]">
          {showBuyModal && !isOrca && (
            <div className="absolute inset-0 z-20 bg-[#0a0a0b] p-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-white">
                  <h3 className="text-xs font-black uppercase tracking-widest">Market Purchase</h3>
                  <button onClick={() => setShowBuyModal(false)} className="text-gray-500 hover:text-white"><X size={16}/></button>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <p className="text-[9px] text-gray-500 font-bold uppercase">Rate</p>
                  <p className="text-sm font-mono text-blue-400">1 {selectedToken.name} = {selectedToken.price} ETH</p>
                </div>
                <div className="space-y-2">
                  <input 
                    type="number" 
                    value={buyAmount}
                    onChange={(e) => setBuyAmount(e.target.value)}
                    placeholder="ETH Amount" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white font-mono text-sm focus:outline-none focus:border-blue-500/50" 
                  />
                </div>
              </div>
              <button disabled={buyDonkIsPending || buyDonkTxIsLoading || buyOggyIsPending || buyOggyTxIsLoading} onClick={handleBuy} className="w-full py-3 cursor-pointer bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px]">Execute Buy</button>
            </div>
          )}

          {(!showBuyModal || isOrca) && (
            <>
              <div>
                {activeTab === 'bridge' ? (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-center gap-4">
                        <button onClick={() => setBridgeStep('approve')} className="flex items-center gap-2 group/step">
                            {bridgeStep === 'confirm' ? <CheckCircle2 size={14} className="text-blue-500" /> : <Circle size={14} className="text-blue-500 animate-pulse" />}
                            <span className={`text-[9px] font-bold uppercase tracking-tighter ${bridgeStep === 'approve' ? 'text-blue-400' : 'text-gray-600'}`}>1. Approve</span>
                        </button>
                        <div className="h-px w-6 bg-white/10" />
                        <button onClick={() => setBridgeStep('confirm')} className="flex items-center gap-2 group/step">
                            <Circle size={14} className={bridgeStep === 'confirm' ? 'text-blue-500 animate-pulse' : 'text-gray-800 group-hover/step:text-blue-400'} />
                            <span className={`text-[9px] font-bold uppercase tracking-tighter ${bridgeStep === 'confirm' ? 'text-blue-400' : 'text-gray-600 group-hover/step:text-blue-400'}`}>2. Bridge</span>
                        </button>
                    </div>

                    {bridgeStep === 'confirm' && (
                        <div className="flex items-start gap-2 p-2 bg-amber-500/5 border border-amber-500/20 rounded-lg animate-in fade-in zoom-in-95">
                            <AlertTriangle size={12} className="text-amber-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-amber-200/70 leading-relaxed italic">
                                Manual Override: Ensure you have already approved {selectedToken.name} spend, otherwise the bridge transaction will fail.
                            </p>
                        </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase text-gray-500 font-bold ml-1 tracking-widest">Amount to Send</label>
                      <div className="relative">
                        <input value={approveAmount} onChange={(e) => setApproveAmount(e.target.value)} type="number" placeholder="0.00" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white font-mono focus:outline-none focus:border-blue-500/50 text-sm" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="space-y-2 pt-4">
                      <label className="text-[10px] uppercase text-gray-500 font-bold ml-1 tracking-widest">Claimable Tokens</label>
                      <input value={claimAmount} onChange={(e) => setClaimAmount(e.target.value)} type="number" placeholder="0.00" className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-xl py-4 px-4 text-white font-mono focus:outline-none focus:border-emerald-500/50 text-sm" />
                    </div>
                    <p className="text-[9px] text-gray-500 text-center italic">Funds from Polygon are ready for local release.</p>
                  </div>
                )}
              </div>

              {activeTab === 'bridge' ? (
                bridgeStep === 'approve' ? (
                    <button
                      disabled={approveIsPending || approveTxIsLoading}
                    onClick={(e) => {
                      e.preventDefault();
                      handleApprove();
                    }} className="w-full cursor-pointer py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-white text-black hover:bg-blue-400 transition-all">
                        Step 1: Approve Spend
                    </button>
                ) : (
                    <button
                      disabled={bridgeIsPending || bridgeTxIsLoading}
                    className="w-full cursor-pointer py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBridge();
                      }}
                    >
                        Step 2: Confirm Bridge
                    </button>
                )
              ) : (
                <button 
                  disabled={withdrawIsPending || withdrawTxIsLoading}
                onClick={handleClaim} className="w-full cursor-pointer py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-emerald-600 text-white hover:bg-emerald-500">
                    Execute Release
                </button>
              )}
            </>
          )}
        </div>
 
        {/* Minimal Footer */}
        <div className="px-6 py-3border-t border-white/5">
          <div className="flex justify-between items-center opacity-40">
            <span className="text-[8px] font-mono text-white tracking-widest">Chain Id: {chainId}</span>
            <span className="text-[8px] font-mono text-white truncate max-w-[150px]">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SepoliaBridgeWrapper = () => {
  const { address, isConnected } = useBridgeStore();

  if (!address || !isConnected) {
    return (
       <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0"><FloatingLines enabledWaves={["top", "bottom"]} /></div>
          <div className="relative z-10"><ConnectWalletCard /></div>
       </div>
    );
  }

  return (
    <div className="relative h-[86vh] w-full flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full flex justify-center px-4">
        <SepoliaBridge address={address} />
      </div>
    </div>
  );
};