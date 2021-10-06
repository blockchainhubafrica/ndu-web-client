import React from "react";
import styles from "./dashboard.module.css";

import { RightBar, SideBar, PharmacyLogin, UserDashBoad, PharmacyDasboard } from "../../components";

function UserDashboard() {
  return (
    <div className="flex">
      <SideBar />
      {/* <PharmacyLogin /> */}
      {/* <UserDashBoad /> */}
      <PharmacyDasboard />
      <RightBar />
    </div>
  );
}

export { UserDashboard };
