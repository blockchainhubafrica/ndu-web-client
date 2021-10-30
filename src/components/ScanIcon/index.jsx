import React from "react";
import { BigScan } from "../../assets";
import styles from "./scan-icon.module.css";

function ScanButton({ bgColor }) {
  if (!bgColor) bgColor = "white";

  return (
    <div className={`${styles["container"]} ${styles[bgColor]} flex lg:hidden`}>
      <BigScan />
    </div>
  );
}

export default ScanButton;
