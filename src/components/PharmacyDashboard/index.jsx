import React from "react";
import { ActionBox } from "..";
import { DrugsSvg, MicroChipSvg } from "../../assets";
import { DashboardLayout } from "../../layouts";
import styles from "./pharmacyDashboard.module.css";

function PharmacyDasboard() {
  return (
    <DashboardLayout>
      <h1 className={`${styles.pharmacyName}`}>Juhel Pharmacy</h1>

      <div className={`${styles.ActionBoxCon}`}>
        <ActionBox
          title="Generate Hash"
          image={MicroChipSvg}
          width="40%"
          height="295px"
        />
        <ActionBox
          title="Drug Inventory"
          image={DrugsSvg}
          width="40%"
          height="295px"
        />
      </div>
    </DashboardLayout>
  );
}

export { PharmacyDasboard };
