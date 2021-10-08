import React from "react";
import styles from "./dashboard.module.css";

import {
  RightBar,
  SideBar,
  PharmacyLogin,
  UserDashboard,
  PharmacyDasboard,
} from "../../components";
import { DashboardLayout } from "../../layouts";

function Dashboard() {
  return (
    <>
      {/* <PharmacyDasboard /> */}
      <UserDashboard />
      {/* <PharmacyLogin /> */}
    </>
  );
}

export { Dashboard };
