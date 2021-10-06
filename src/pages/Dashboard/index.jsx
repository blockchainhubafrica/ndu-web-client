import React from "react";
import styles from "./dashboard.module.css";

import { RightBar, SideBar, PharmacyLogin, UserDashBoad } from "../../components";

function UserDashboard() {
  return (
    <div className="flex">
      <SideBar />
      {/* <PharmacyLogin /> */}
      {/* <UserDashBoad /> */}
      <RightBar />
    </div>
  );
}

export { UserDashboard };
