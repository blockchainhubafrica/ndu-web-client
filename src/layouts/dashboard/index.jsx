import React from "react";
import {
  RightBar,
  SideBar,
  DashboardHeader,
  DashboardFooter,
  CameraDisplay,
} from "../../components";
import styles from "./dashboard.module.css";
import { useUserContext } from "../../contexts/userContext";
import ScanButton from "../../components/ScanIcon";
import { useHistory, useLocation } from "react-router";

function DashboardLayout({ children }) {
  const route = useLocation().pathname;
  const showScanButton = !route.includes("signup");
  const { scanner, setScanner } = useUserContext();
  // console.log(scanner);
  return (
    <div className={`${styles.dashboardCon}`}>
      {scanner && <CameraDisplay />}
      <>
        <DashboardHeader />
        <div className={`${styles["container"]} flex`}>
          <SideBar />
          <div className={`${styles["center-con"]} lg:h-screen`}>
            {children}
          </div>
          <RightBar />
        </div>
        <DashboardFooter />
        {showScanButton && <ScanButton onClick={() => setScanner(true)} />}
      </>
    </div>
  );
}

export { DashboardLayout };
