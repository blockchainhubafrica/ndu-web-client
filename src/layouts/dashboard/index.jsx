import React from "react";
import { RightBar, SideBar } from "../../components";
import styles from "./dashboard.module.css";

function DashboardLayout({ children }) {
  return (
    <>
      <div className="hidden lg:flex">
        <SideBar />
        <div className={styles["center-con"]}>{children}</div>
        <RightBar />
      </div>
      <div className="lg:hidden h-screen flex align-middle justify-center">
        <p className="text-3xl mt-24">Mobile view coming soon 😉</p>
      </div>
    </>
  );
}

export { DashboardLayout };
