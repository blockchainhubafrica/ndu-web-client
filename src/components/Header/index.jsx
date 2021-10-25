import React from "react";
import { Link } from "react-router-dom";
import { FullLogoIcon } from "../../assets";
import { WalletButton } from "../WalletButton";
import styles from "./header.module.css";

function Header({ setDisplay }) {
  return (
    <header className={`${styles.container}`}>
      <div className="container flex flex-wrap justify-between mx-auto">
        <Link to="/">
          <FullLogoIcon />
        </Link>
        <WalletButton />
      </div>
    </header>
  );
}

export { Header };
