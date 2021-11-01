import React, { useEffect, useState } from "react";
import styles from "./cameraDisplay.module.css";
import { ScanTracker } from "../../assets";
import { MainButton } from "..";
import { useUserContext } from "../../contexts/userContext";
import QrReader from "react-qr-scanner";
import { useToastContext } from "../../contexts/toastContext";

function CameraDisplay() {
  const [data, setData] = useState("Not Found");
  // const [isShowing, setIs]
  const { scanner, setScanner } = useUserContext();
  const { toast } = useToastContext();

  let containerClass = `${styles.cameralDisplayOuterCon}`;
  if (!scanner) containerClass = "hidden";

  // useEffect(() => {
  //   if (scanner) {
  //     setTimeout(() => {
  //       if (!scanner) return;
  //       // toast.error("Scanner has timed out");
  //       setScanner(false);
  //     }, 10000);
  //   }
  // });

  return (
    <div className={containerClass}>
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
                onError={(err) => {
                  console.log(err);
                  alert(err);
                  toast.error("Something went wrong. Please try again");
                }}
                onScan={(output) => {
                  if (output) setData(output);
                  console.log(output);
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
