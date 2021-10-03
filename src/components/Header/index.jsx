import React from "react";
import { FullLogoIcon } from "../../assets";
import styles from "./header.module.css";

function Header(props) {
  return (
    <header className={`${styles.container}`}>
      <div className="container flex flex-wrap justify-between mx-auto">
        <FullLogoIcon />
        <div>Connect Wallet</div>
      </div>
    </header>
  );
}

export default Header;
