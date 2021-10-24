import React, { Suspense } from "react";
import { WalletIcon } from "../../assets";
import { WalletProvider } from "ethereal-react";
import { ConnectButton } from "./ConnectButton";
import { DisconnectWalletButton } from "./DisconnectWallet";

function WalletButton({ setDisplay }) {
  return (
    <WalletProvider fallback={<ConnectButton />} cacheProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <DisconnectWalletButton />
      </Suspense>
    </WalletProvider>
  );
}

export { WalletButton };
