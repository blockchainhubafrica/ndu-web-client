import React from "react";
import { Link } from "react-router-dom";
import { NormalButton } from "..";
import { FullLogoIcon, WalletIcon } from "../../assets";
import styles from "./header.module.css";

function Header({ setDisplay }) {
  return (
    <header className={`${styles.container}`}>
      <div className="container flex flex-wrap justify-between mx-auto">
        <Link to="/">
          <FullLogoIcon />
        </Link>
        <NormalButton
          bg="#022655"
          onClick={() => {
            setDisplay(true);
          }}
        >
          <span className="hidden md:block">Connect Wallet</span>
          <WalletIcon className={`${styles["wallet-icon"]} md:hidden`} />
        </NormalButton>
      </div>
    </header>
  );
}

export { Header };
