import React from "react";
import { ActionBox } from "..";
import { DrugsSvg, MicroChipSvg } from "../../assets";
import { DashboardLayout } from "../../layouts";
import styles from "./pharmacyDashboard.module.css";

function PharmacyDasboard() {
  return (
    <DashboardLayout circularButtonDisplay="none">
      <h1 className={`${styles.pharmacyName}`}>Juhel Pharmacy</h1>

      <div className={`${styles.ActionBoxCon}`}>
        <ActionBox
          title="Generate Hash"
          image={MicroChipSvg}
          width="317px"
          height="295px"
        />
        <ActionBox
          title="Drug Inventory"
          image={DrugsSvg}
          width="317px"
          height="295px"
        />
      </div>
    </DashboardLayout>
  );
}

export { PharmacyDasboard };
