import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BinanceChain,
  CloseIcon,
  MetaMask,
  TrustWallet,
  WalletConnect,
  WhiteCloseIcon,
} from "../../assets";
import styles from "./connectWalletModal.module.css";

function ConnectWalletModal({ displayModal, setDisplayModal }) {
  //   const [display, setDisplay] = useState("none");
  return (
    <>
      {displayModal ? (
        <div className={styles.connectWalletModalCon}>
          <div className={styles.connectWalletModalInnerCon}>
            <div className={styles.top}>
              <h5 className={styles.title}>Connect wallet</h5>
              <WhiteCloseIcon
                className={styles.closeIcon}
                onClick={() => {
                  setDisplayModal(false);
                }}
              />
            </div>
            <div
              className={`${styles.main} w-6/6 h-auto flex items-center justify-evenly`}
            >
              {/* <TrustWallet /> */}
              <Link to="/dashboard/user">
              <MetaMask />
              </Link>
              {/* <WalletConnect /> */}
                {/* <BinanceChain /> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ConnectWalletModal;
