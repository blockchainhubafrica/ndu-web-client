import React from "react";
import {
  RightBar,
  SideBar,
  DashboardHeader,
  DashboardFooter,
} from "../../components";
import styles from "./dashboard.module.css";

function DashboardLayout({ children}) {
  return (
    <>
      <DashboardHeader />
      <div className={`${styles["container"]} flex`}>
        <SideBar />
        <div className={`${styles["center-con"]} lg:h-screen`}>{children}</div>
        <RightBar />
      </div>
      <DashboardFooter />
    </>
  );
}

export { DashboardLayout };
