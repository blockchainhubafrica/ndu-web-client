import React from "react";
import { MainButton } from "..";
import { BigScan } from "../../assets";
import styles from "./rightBar.module.css";

function RightBar() {
  return (
    <div className={`${styles.rightContainer}`}>
      <h1>Scan products.</h1>
      <p>
        Place barcode inside the frame to scan. Please keep your device steady
        when scanning to ensure accurate results.
      </p>
      <div className={`${styles.iconCard}`}>
        <BigScan />
      </div>
      <MainButton buttonText="Scan barcode" />
    </div>
  );
}

export {RightBar};
