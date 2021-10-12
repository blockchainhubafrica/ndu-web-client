import React, { useState } from "react";
import styles from "./disconnect-wallet-button.module.css";
import { ArrowDown, WalletIcon } from "../../assets";

function DisconnectWalletButton({ address }) {
  const [arrowDown, setArrowDown] = useState(true);
  let containerClasses = `${styles["container"]} `;
  if (!arrowDown) containerClasses += `${styles["active"]}`;

  return (
    <div
      onClick={() => setArrowDown(!arrowDown)}
      className={`${containerClasses}`}
    >
      <div className={`${styles["wallet-address-box"]} `}>
        <WalletIcon className="" />
        <h2 className={`${styles["address"]} mx-3`}>{address}</h2>
        <ArrowDown className={`${styles["arrow-down-icon"]}`} />
      </div>
      <button
        onClick={() => alert("Wallet Disconnected")}
        className={`${styles["disconnect-btn"]} shadow-l`}
      >
        <span>Disconnect</span>
      </button>
    </div>
  );
}

export { DisconnectWalletButton };
