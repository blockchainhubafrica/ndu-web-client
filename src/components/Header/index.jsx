import React from "react";
import { Link } from "react-router-dom";
import { FullLogoIcon } from "../../assets";
import styles from "./header.module.css";

function Header(props) {
  return (
    <header className={`${styles.container}`}>
      <div className="container flex flex-wrap justify-between mx-auto">
        <Link to="/">
          <FullLogoIcon />
        </Link>
        <div>Connect Wallet</div>
      </div>
    </header>
  );
}

export { Header };
