import React from "react";
import styles from "./cameraDisplay.module.css";
import { ScanTracker } from "../../assets";
import { MainButton } from "..";

function CameraDisplay() {
  return (
    <div className={`${styles.cameraDisplayCon}`}>
      <h5 className={`${styles.barCodeDescription}`}>
        Place barcode inside the frame to scan. Please keep your device steady
        when scanning to ensure accurate results.
      </h5>
      <div className={`${styles.cameraView}`}>
        <div className={`${styles.cameraOverlay}`}>
          <ScanTracker />
        </div>
      </div>
      <MainButton buttonText="Stop Scanning" bg="#707173" />
    </div>
  );
}

export { CameraDisplay };
