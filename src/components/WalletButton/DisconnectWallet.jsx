import React, { useState, useEffect } from "react";
import styles from "./wallet-button.module.css";
import { ArrowDown, WalletIcon } from "../../assets";
import { useDisconnectWallet } from "ethereal-react";
import { useShortenAddress } from "../../hooks";
import { useUserAddress } from "ethereal-react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

function DisconnectWalletButton({ onDisconnect }) {
  const history = useHistory();
  const address = useUserAddress();
  const { user, setUser } = useUserContext();

  useEffect(() => {
    if (!address) return;
    const userState = { ...user };
    userState.address = address;
    setUser(userState);
  }, [address]);

  const walletAddress = "*****";
  const { shortAddress } = useShortenAddress(address ?? walletAddress);
  const disconnect = useDisconnectWallet();

  const [arrowDown, setArrowDown] = useState(true);
  let containerClasses = `${styles["container"]} `;
  if (!arrowDown) containerClasses += `${styles["active"]}`;
  const handleDisconnect = () => {
    disconnect();
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };
  return (
    <div
      onClick={() => setArrowDown(!arrowDown)}
      className={`${containerClasses}`}
    >
      <div className={`${styles["wallet-address-box"]} `}>
        <WalletIcon className="" />
        <h2 className={`${styles["address"]} mx-3`}>{shortAddress}</h2>
        <ArrowDown className={`${styles["arrow-down-icon"]}`} />
      </div>
      <button
        onClick={handleDisconnect}
        className={`${styles["disconnect-btn"]} shadow-l`}
      >
        <span>Disconnect</span>
      </button>
    </div>
  );
}

export { DisconnectWalletButton };
