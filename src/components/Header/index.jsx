import React from "react";
import { Link } from "react-router-dom";
import { NormalButton } from "..";
import { FullLogoIcon } from "../../assets";
import styles from "./header.module.css";

function Header({ setDisplay }) {
  return (
    <header className={`${styles.container}`}>
      <div className="container flex flex-wrap justify-between mx-auto">
        <Link to="/">
          <FullLogoIcon />
        </Link>
        <Link to="/dashboard/user">
        <NormalButton
          buttonText="Connect wallet"
          bg="#022655"
          // action={() => {
          //   console.log("clicked");
          //   setDisplay(true);
          // }}
        />
        </Link>
      </div>
    </header>
  );
}

export { Header };
