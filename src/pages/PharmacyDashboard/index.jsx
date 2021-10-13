import React from "react";
import { ActionBox } from "../../components";
import { BigScan, DrugsSvg, MicroChipSvg } from "../../assets";
import { DashboardLayout } from "../../layouts";
import styles from "./pharmacyDashboard.module.css";
import { Link } from "react-router-dom";

function PharmacyDasboard() {
  return (
    <DashboardLayout circularButtonDisplay="none">
      <div className="container py-6 md:py-12 px-4 md:px-12 lg:px-20 mb-20">
        <h2
          className={`${styles.pharmacyName} text-xl sm:text-2xl md:text-4xl font-bold mb-6 md:mb-10`}
        >
          Juhel Pharmacy
        </h2>
        <div
          className={`${styles.ActionBoxCon} grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-5 gap-5 lg:gap-10 `}
        >
          <Link to="/dashboard/pharmacy/generate-hash">
            <div className="3xl-col-span-2">
              <ActionBox title="Generate Hash">
                <MicroChipSvg />
              </ActionBox>
            </div>
          </Link>
          <Link to="/dashboard/pharmacy/drugs">
            <div className="3xl-col-span-2">
              <ActionBox title="Drug Inventory">
                <DrugsSvg />
              </ActionBox>
            </div>
          </Link>
        </div>
      </div>
      <div className={`${styles.circularButton} flex lg:hidden`}>
        <BigScan />
      </div>
    </DashboardLayout>
  );
}

export { PharmacyDasboard };
