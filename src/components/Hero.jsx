import { React, useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  apiProvider,
  
  
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.polygonMumbai, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})




function Hero() {
  const downloadImgStyle = 'border-[2px]  rounded-[13px] h-[3rem] w-[10rem] bg-gradient-to-r from-pink-600 to-orange-700'
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Kalvi</span>{" "}
          <span>
            <b>Incentivizing learning </b>
          </span>
          <span className="text-[28px]">by streaming rewards</span>
          <span className="text-[15px] text-[#525D6E]">
            
            <br />
            To reskill and upskill the learning community across.
          </span>
          {/* download ads */}
          <div >
            <br/><WagmiConfig client={wagmiClient}>
              <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <div className = "text-sm">
            <ConnectButton /></div>
            </RainbowKitProvider>
            </WagmiConfig>
          </div>
        </div>
        {/* right side */}
        <div className="images relative w-[65%]">
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../img/backgraphics.png")}
            alt=""
            className="absolute top-[-10rem] left-[19rem]"
          />
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../img/bg3.png")}
            alt=""
            className="absolute top-[-18rem] left-[19rem]"
          />
          <img
            src={require("../img/pic1.png")}
            alt=""
            className="absolute top-[-15rem] h-[34rem] left-[13rem]"
          />
          {/*<motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("../img/p 2.png")}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px]"
          />*/}
          
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
