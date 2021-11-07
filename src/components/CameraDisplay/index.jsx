import React, { useEffect, useState } from "react";
import styles from "./cameraDisplay.module.css";
import { ScanTracker } from "../../assets";
import { MainButton, Modal } from "..";
import { useUserContext } from "../../contexts/userContext";
import QrReader from "react-qr-scanner";
import { useToastContext } from "../../contexts/toastContext";
import { getScannedDrugDetails } from "../../services/web3Services";
import OriginalDrugModal from "../Modal/OriginalDrugModal";

function CameraDisplay() {
  const [displayModal, setdisplayModal] = useState(true);
  const closeModal = () => {
    setdisplayModal(false);
    setScanner(false);
  };
  // const [data, setData] = useState("Not Found");
  // const [isShowing, setIs]
  const { scanner, setScanner } = useUserContext();
  const { toast } = useToastContext();
  const [drugDetails, setDrugDetails] = useState(null);

  let containerClass = `${styles.cameralDisplayOuterCon}`;
  if (!scanner) containerClass = "hidden";
  let cameraDisplayContainerClass = `${styles.cameraDisplayCon} `;
  if (drugDetails) cameraDisplayContainerClass += "force-hidden";
  // useEffect(() => {
  //   if (scanner) {
  //     setTimeout(() => {
  //       if (!scanner) return;
  //       // toast.error("Scanner has timed out");
  //       setScanner(false);
  //     }, 10000);
  //   }
  // });

  // useEffect(() => {
  //   getScannedDrugDetails("0218616045")
  // },[])

  return (
    <div className={containerClass}>
      <div className={cameraDisplayContainerClass}>
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
                  if (output) {
                    (async () => {
                      console.log(output.text);
                      const serial = output.text;
                      const details = await getScannedDrugDetails(serial);
                      setDrugDetails(details);
                      setdisplayModal(true);
                    })();
                    // setData(output);
                  }
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
      {displayModal && drugDetails && (
        <Modal
          type={"original"}
          data={drugDetails}
          closeModal={() => closeModal()}
        />
      )}
    </div>
  );
}

export { CameraDisplay };
