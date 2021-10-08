import React from "react";
import { BigScan } from "../../assets";
import { RightBar, SideBar } from "../../components";
import styles from "./dashboard.module.css";

function DashboardLayout({ children, bg, fill, circularButtonDisplay }) {
  return (
    <>
      <div className={`${styles["layout-con"]} flex`}>
        <SideBar />
        <div className={styles["center-con"]}>
          {children}
          <div
            className={`${styles.circularButton}`}
            style={{
              background: bg ? bg : null,
              display: circularButtonDisplay ? circularButtonDisplay : null,
            }}
          >
            <BigScan className={`${fill ? styles.whiteScanIcon : null}`} />
          </div>
        </div>
        <RightBar />
      </div>
      {/* <div className="lg:hidden h-screen flex align-middle justify-center">
        <p className="text-3xl mt-24">
          I made Chidi's dream come true by making this layout and their
          children component responsive 😉
        </p>
      </div> */}
    </>
  );
}

export { DashboardLayout };
