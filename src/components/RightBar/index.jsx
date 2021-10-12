import React, { useState, useEffect } from "react";
import { MainButton } from "..";
import { ArrowDown, BigScan, HalfLogoIcon, WalletIcon } from "../../assets";
import styles from "./rightBar.module.css";

function RightBar() {
  const [walletAddress, setWalletAddress] = useState("");

  const getWalletAddress = (address) => {
    if (window.innerWidth > 768) {
      setWalletAddress(
        `${
          address.substring(0, 3) +
          "..." +
          address.substring(address.length - 4)
        }`
      );
    } else {
      setWalletAddress(
        `${
          address.substring(0, 2) +
          "..." +
          address.substring(address.length - 2)
        }`
      );
    }
  };

  useEffect(() => {
    getWalletAddress("0x285C21a2dCF5d779d03300191E76d2907A69Cc80");
    return () => {
      getWalletAddress("0x285C21a2dCF5d779d03300191E76d2907A69Cc80");
    };
  }, []);

  return (
    <div className={`${styles.rightContainer} hidden lg:block`}>
      <div className={`${styles.walletBalanceCon} mt-10`}>
        <HalfLogoIcon />
        <h1 className={`${styles.walletBalance} pr-8 pl-2`}>$10.5</h1>
        <div className={`${styles.walletButton}`}>
          <WalletIcon />
          <h2 className={`${styles.walletAddress}`}>{walletAddress}</h2>
          <ArrowDown />
        </div>
      </div>
      <div
        className={`${styles.rightConDown} flex flex-col items-center mt-20`}
      >
        <h1>Scan products.</h1>
        <p className="mt-3">
          Place barcode inside the frame to scan. Please keep your device steady
          when scanning to ensure accurate results.
        </p>
        <div className={`${styles.iconCard} mt-20 mb-12`}>
          <BigScan />
        </div>
        <MainButton buttonText="Scan barcode" mt="mt-15" />
      </div>
    </div>
  );
}

export { RightBar };
