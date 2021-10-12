import React from "react";
import { ArrowDown, HalfLogoIcon, WalletIcon } from "../../assets";
import { useShortenAddress } from "../../hooks";
import styles from "./dashboard-header.module.css";

function DashboardHeader(props) {
  const walletAddress = "0x285C21a2dCF5d779d03300191E76d2907A69Cc80";
  const { shortAddress } = useShortenAddress(walletAddress);

  return (
    <div className={`${styles["walletBalanceCon"]}  py-3 shadow-sm lg:hidden`}>
      <div className="flex container">
        <HalfLogoIcon />
        <div
          className={`${styles.walletButton} px-5 py-3 flex items-center justify-center`}
        >
          <WalletIcon className="" />
          <h2 className={`${styles.walletAddress} mx-3`}>{shortAddress}</h2>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}

export { DashboardHeader };
