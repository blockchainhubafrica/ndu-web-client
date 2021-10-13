import React from "react";
import { ArrowLeft, drug } from "../../assets";
import { DashboardLayout } from "../../layouts";
import { Drug } from "./components";

import styles from "./pharmacyDrugInventory.module.css";

const PharmacyDrugInventory = () => {
  return (
    <DashboardLayout>
      <div
        className={`${styles.container} container py-12 px-4 md:px-12 lg:px-20 mb-20`}
      >
        <div className="mb-16 ">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
            Juhel Pharmacy
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-sm">
            <span>
              <ArrowLeft className="inline-block mr-4" />
            </span>
            Back
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h3 className="font-medium text-xl">Drug Inventory</h3>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {[0, 0, 0, 0, 0, 0].map((item, index) => (
            <div key={index}>
              <Drug image={drug} name="Tetracycline" />
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export { PharmacyDrugInventory };
