import React from "react";
import { BigScan } from "../../assets";
import { RightBar, SideBar } from "../../components";
import styles from "./dashboard.module.css";

function DashboardLayout({ children }) {
  return (
    <>
      <div className={`${styles["layout-con"]} flex`}>
        <SideBar />
        <div className={styles["center-con"]}>
          {children}
          <div className={`${styles.circularButton}`}>
            <BigScan />
          </div>
        </div>
        <RightBar />
      </div>
      {/* <div className="lg:hidden h-screen flex align-middle justify-center">
        <p className="text-3xl mt-24">Mobile view coming soon 😉</p>
      </div> */}
    </>
  );
}

export { DashboardLayout };
