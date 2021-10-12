import React from "react";
import { ActionBox } from "../../components";
import { DrugsSvg, MicroChipSvg } from "../../assets";
import { DashboardLayout } from "../../layouts";
import styles from "./pharmacyDashboard.module.css";

function PharmacyDasboard() {
  return (
    <DashboardLayout circularButtonDisplay="none">
      <div className="container mb-32 lg:md-0">
        <h2 className={`${styles.pharmacyName} text-4xl my-10`}>
          Juhel Pharmacy
        </h2>
        <div
          className={`${styles.ActionBoxCon} grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-5 gap-5 lg:gap-10 `}
        >
          <div className="3xl-col-span-2">
            <ActionBox title="Generate Hash" image={MicroChipSvg} />
          </div>
          <div className="3xl-col-span-2">
            <ActionBox title="Drug Inventory" image={DrugsSvg} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export { PharmacyDasboard };
