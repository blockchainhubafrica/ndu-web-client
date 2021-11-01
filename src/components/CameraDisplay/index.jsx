import React, { useState } from "react";
import styles from "./cameraDisplay.module.css";
import { ScanTracker } from "../../assets";
import { MainButton } from "..";
import { useUserContext } from "../../contexts/userContext";
import QrReader from "react-qr-scanner";

function CameraDisplay({ display }) {
  const [data, setData] = useState("Not Found");

  const { scanner, setScanner } = useUserContext();
  return (
    <div
      className={`${styles.cameralDisplayOuterCon}`}
      style={{ display: display }}
    >
      <div className={`${styles.cameraDisplayCon}`}>
        <h5 className={`${styles.barCodeDescription}`}>
          Place barcode inside the frame to scan. Please keep your device steady
          when scanning to ensure accurate results.
        </h5>
        <div className={`${styles.cameraView}`}>
          <div className={`${styles.cameraOverlay}`}>
            {/* <ScanTracker /> */}
            {scanner && (
              <QrReader
                delay={500}
                onError={(err) => console.log(err)}
                onScan={(data) => {
                  setData(data);
                  if(data) {
                    setScanner(false);
                  }
                  console.log(data);
                }}
              />
            )}
          </div>
        </div>
        {/* <h1>{data}</h1> */}
        <MainButton
          buttonText="Stop Scanning"
          bg="#707173"
          onClick={() => {
            setScanner(false);
          }}
        />
      </div>
    </div>
  );
}

export { CameraDisplay };
