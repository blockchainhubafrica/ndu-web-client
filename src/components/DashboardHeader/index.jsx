import React from "react";
import { Link } from "react-router-dom";
import { HalfLogoIcon } from "../../assets";
import styles from "./dashboard-header.module.css";
import { WalletButton } from "../WalletButton";

function DashboardHeader(props) {
  return (
    <div className={`${styles["walletBalanceCon"]}  py-3 shadow-sm lg:hidden`}>
      <div className="flex container">
        <Link to="/">
          <HalfLogoIcon />
        </Link>
        <WalletButton />
      </div>
    </div>
  );
}

export { DashboardHeader };
