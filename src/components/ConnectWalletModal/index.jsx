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
        <div
          onClick={() => setDisplayModal(false)}
          className={styles.connectWalletModalCon}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles.connectWalletModalInnerCon}
          >
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
              <Link to="/dashboard/user">
                <TrustWallet />
              </Link>
              <Link to="/dashboard/user">
                <MetaMask />
              </Link>
              <Link to="/dashboard/user">
                <WalletConnect />
              </Link>
              <Link to="/dashboard/user">
                <BinanceChain />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ConnectWalletModal;
