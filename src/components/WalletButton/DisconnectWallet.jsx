import React, { useState } from "react";
import styles from "./wallet-button.module.css";
import { ArrowDown, WalletIcon } from "../../assets";
import { useShortenAddress } from "../../hooks";
import { useUserContext } from "../../contexts/userContext";

function DisconnectWalletButton() {
  const { user, handleWalletDisconnect } = useUserContext();
  const shortAddress = useShortenAddress(user?.address);

  const [arrowDown, setArrowDown] = useState(true);
  let containerClasses = `${styles["container"]} `;
  if (!arrowDown) containerClasses += `${styles["active"]}`;

  const handleDisconnect = () => {
    handleWalletDisconnect();
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
