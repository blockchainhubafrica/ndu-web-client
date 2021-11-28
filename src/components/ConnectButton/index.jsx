import React from "react";
import { NormalButton } from "../NormalButton";
import { WalletIcon } from "../../assets";
import styles from "./connect-button.module.css";
import { useConnectToWallet } from "ethereal-react";

function ConnectButton({ setDisplay }) {
  const [connect, { loading, error }] = useConnectToWallet();

  return (
    <div>
      {error && <div>Error connecting to wallet: {error.message}</div>}

      <NormalButton bg="#022655" onClick={connect} disabled={loading}>
        <span className="hidden md:block">Connect Wallet</span>
        <WalletIcon className={`${styles["wallet-icon"]} md:hidden`} />
      </NormalButton>
    </div>
  );
}

export { ConnectButton };
