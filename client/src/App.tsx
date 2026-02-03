import { ConnectKitButton } from "connectkit";
import { Web3Provider } from "./Web3Provider"
import { Toaster } from 'sonner';
import { useAccount } from "wagmi";
import { useBridgeStore } from "./lib/store";
import { useEffect } from "react";
import { ConnectWalletCard } from "./components/wallet-connect";
import { SepoliaBridgeWrapper } from "./components/sepolia-bridge";
import { PolygonBridgeWrapper } from "./components/polygon-bridge";
import ClickSpark from "./components/ui/ClickSpark";
import { Navbar } from "./components/navbar";
import { BridgeHome } from "./components/home";
import Hyperspeed from "./components/ui/Hyperspeed";
import Badge from "./components/badge";

function App() {

  return (
    <Web3Provider>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        
      <div className="min-h-screen gelasio relative selection:bg-[#2cd3e5] selection:text-black">
        <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{"distortion":"turbulentDistortion","length":400,"roadWidth":10,"islandWidth":2,"lanesPerRoad":3,"fov":90,"fovSpeedUp":100,"speedUp":2,"carLightsFade":0.4,"totalSideLightSticks":20,"lightPairsPerRoadWay":40,"shoulderLinesWidthPercentage":0.05,"brokenLinesWidthPercentage":0.1,"brokenLinesLengthPercentage":0.5,"lightStickWidth":[0.12,0.5],"lightStickHeight":[1.3,1.7],"movingAwaySpeed":[60,80],"movingCloserSpeed":[-120,-160],"carLightsLength":[12,80],"carLightsRadius":[0.05,0.14],"carWidthPercentage":[0.3,0.5],"carShiftX":[-0.8,0.8],"carFloorSeparation":[0,5],"colors":{"roadColor":526344,"islandColor":657930,"background":0,"shoulderLines":1250072,"brokenLines":1250072,"leftCars":[14177983,6770850,12732332],"rightCars":[242627,941733,3294549],"sticks":242627}}}
        />
              </div>
        <Navbar/>
        <div className="relative flex items-center justify-end mt-4">
          <ConnectKitButton/>
        </div>
        <div className="mt-10 flex items-center justify-center text-white w-full">
          <RenderScreen/>
        </div>
        <Toaster/>

        <Badge/>
      </div>
      </ClickSpark>
    </Web3Provider>
  )
}
export default App;

const RenderScreen = () => {
  const { address, isConnected } = useAccount();
  const { setAddress, setIsConnected, screen } = useBridgeStore();

  useEffect(() => {
    setAddress(address);
    setIsConnected(isConnected);
  }, [address, isConnected, setAddress, setIsConnected])

  if(screen === 'sepolia') {
    if(!address || !isConnected) {
      return <ConnectWalletCard/>
    }
    return <SepoliaBridgeWrapper/>
  }
  else if(screen === 'polygon') {
    if(!address || !isConnected) {
      return <ConnectWalletCard/>
    }
    return <PolygonBridgeWrapper/>
  }
  else {
    return <BridgeHome/>
  }
}