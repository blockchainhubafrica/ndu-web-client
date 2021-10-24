import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  BinanceChain,
  MetaMask,
  TrustWallet,
  WalletConnect,
  WhiteCloseIcon,
} from "../../assets";
import styles from "./connectWalletModal.module.css";

function ConnectWalletModal({ displayModal, setDisplayModal }) {
  const history = useHistory();
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
              <button
                className="flex flex-col items-center"
                onClick={() => history.push("/dashboard/user")}
              >
                <TrustWallet />
                <span className="mt-4">Trust wallet</span>
              </button>

              <button
                className="flex flex-col items-center"
                onClick={() => history.push("/dashboard/user")}
              >
                <MetaMask />
                <span className="mt-4">Meta Mask</span>
              </button>

              <button
                className="flex flex-col items-center"
                onClick={() => history.push("/dashboard/user")}
              >
                <WalletConnect />
                <span className="mt-6">Wallet Connect</span>
              </button>

              <button
                className="flex flex-col items-center"
                onClick={() => history.push("/dashboard/user")}
              >
                <BinanceChain />
                <span className="mt-4">Binance Chain</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ConnectWalletModal;
