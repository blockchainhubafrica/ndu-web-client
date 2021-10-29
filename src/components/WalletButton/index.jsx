import React from "react";
import { ConnectButton } from "./ConnectButton";
import { DisconnectWalletButton } from "./DisconnectWallet";
import { useUserContext } from "../../contexts/userContext";

function WalletButton({}) {
  const { isConnected } = useUserContext();
  
  return isConnected ? <DisconnectWalletButton /> : <ConnectButton />;
}

export { WalletButton };
