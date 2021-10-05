import React from "react";
import { MainButton } from "..";
import { ArrowDown, BigScan, HalfLogoIcon, WalletIcon } from "../../assets";
import styles from "./rightBar.module.css";

function RightBar() {
  return (
    <div className={`${styles.rightContainer}`}>
        <div className={`${styles.walletBalanceCon}`}>
            <HalfLogoIcon />
            <h1 className={`${styles.walletBalance} pr-8 pl-2`}>$10.5</h1>
            <div className={`${styles.walletButton}`}>
                <WalletIcon />
                <h2 className={`${styles.walletAddress}`}>0xd...07E9</h2>
                <ArrowDown />
            </div>
        </div>
      <h1>Scan products.</h1>
      <p>
        Place barcode inside the frame to scan. Please keep your device steady
        when scanning to ensure accurate results.
      </p>
      <div className={`${styles.iconCard}`}>
        <BigScan />
      </div>
      <MainButton buttonText="Scan barcode" />
    </div>
  );
}

export {RightBar};
