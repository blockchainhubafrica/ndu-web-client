import React from "react";
import { RightBar, SideBar } from "../../components";
import styles from "./dashboard.module.css";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <div className={styles["center-con"]}>{children}</div>
      <RightBar />
    </div>
  );
}

export { DashboardLayout };
