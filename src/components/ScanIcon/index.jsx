import React from "react";
import { BigScan } from "../../assets";
import styles from "./scan-icon.module.css";

function ScanButton({ bgColor, onClick }) {
  if (!bgColor) bgColor = "white";

  return (
    <div
      onClick={onClick}
      className={`${styles["container"]} ${styles[bgColor]} flex lg:hidden`}
    >
      <BigScan />
    </div>
  );
}

export default ScanButton;
