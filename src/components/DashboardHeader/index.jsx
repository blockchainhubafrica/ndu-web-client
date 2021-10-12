import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HalfLogoIcon } from "../../assets";
import { useShortenAddress } from "../../hooks";
import styles from "./dashboard-header.module.css";
import { DisconnectWalletButton } from "../index";

function DashboardHeader(props) {
  const walletAddress = "0x285C21a2dCF5d779d03300191E76d2907A69Cc80";
  const { shortAddress } = useShortenAddress(walletAddress);

  return (
    <div className={`${styles["walletBalanceCon"]}  py-3 shadow-sm lg:hidden`}>
      <div className="flex container">
        <Link to="/dashboard/user">
          <HalfLogoIcon />
        </Link>
        <DisconnectWalletButton address={shortAddress} />
      </div>
    </div>
  );
}

export { DashboardHeader };
