import React from "react";
import DownloadAds from "./DownloadAds";
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


function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
      {/* tild icon or path icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Our Solution</span>
        <span>
          <b>Kalvi Dapp!</b>
        </span>
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
        We created a dApp that can connect Sponsor and Learner together to achieve learning goals, that can create business impact for the organization. Sponsor can signup, onboard learners, create courses, assign reward for courses. Learner can learn the courses, take assessment, receive proof of milestone NFTS and earn rewards in USDCx super token. Learner can unwrap the token to stable coin and withdraw to their exchange account.
        </span>
      </div>
      {/* dowload ads */}
      <div >
      <WagmiConfig client={wagmiClient}>
              <RainbowKitProvider chains={chains} theme={darkTheme()}>
                <br/>
          <div className = "text-sm">
            <ConnectButton /></div>
            </RainbowKitProvider>
            </WagmiConfig>
      </div>
    </div>
  );
}

export default Download;
