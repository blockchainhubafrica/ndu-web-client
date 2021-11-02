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

function DashboardLayout({ children }) {
  const { scanner } = useUserContext();
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
      </>
    </div>
  );
}

export { DashboardLayout };
