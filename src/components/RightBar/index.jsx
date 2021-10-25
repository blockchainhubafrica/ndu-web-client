import React from "react";
import { MainButton } from "..";
import { BigScan, HalfLogoIcon } from "../../assets";
import { WalletButton } from "../WalletButton";
import styles from "./rightBar.module.css";

function RightBar() {
  return (
    <div className={`${styles.rightContainer} hidden lg:block`}>
      <div className={`${styles.walletBalanceCon} mt-10`}>
        <HalfLogoIcon />
        <h1 className={`${styles.walletBalance} pr-8 ml-4`}>$10.5</h1>
        <div className="ml-auto">
          <WalletButton />
        </div>
      </div>
      <div className={`${styles.rightConDown} mt-16 mb-10`}>
        <h1>Scan products.</h1>
        <p className="mt-3">
          Place barcode inside the frame to scan. Please keep your device steady
          when scanning to ensure accurate results.
        </p>
        <div className={`${styles.iconCard} mt-16 mb-12 mx-auto`}>
          <BigScan />
        </div>
        <div className="mx-auto flex justify-center">
          <MainButton
            onClick={() => alert("Scanning...")}
            buttonText="Scan barcode"
            mt="mt-15"
          />
        </div>
      </div>
    </div>
  );
}

export { RightBar };
