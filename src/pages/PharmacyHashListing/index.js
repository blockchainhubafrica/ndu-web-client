import React from "react";
import { ArrowLeft } from "../../assets";
import { Input } from "../../components";
import { DashboardLayout } from "../../layouts";
import { HashListItem } from "./components";

import styles from "./pharmacyHashListing.module.css";

const PharmacyHashListing = () => {
  return (
    <DashboardLayout>
      <div
        className={`${styles.container}  py-12 px-4 md:px-12 lg:px-20 mb-20`}
      >
        <div className="flex flex-wrap justify-between mb-16 ">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-0">
            Juhel Pharmacy
          </h1>
          <Input placeHolder="Search hash address" />
        </div>
        <div className="mb-6">
          <p>
            <span>
              <ArrowLeft className="inline-block mr-4" />
            </span>
            Back
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h3 className="font-medium text-xl">Tetracycline</h3>
          <h4 className="text-sm">Generated: Fri 01 Oct. 2021</h4>
        </div>
        <div>
          {[0, 0, 0, 0, 0, 0].map((item, index) => (
            <div key={index} className="mb-5">
              <HashListItem address="0x4cb39067524...f522c4f5cf82faaf" />
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export { PharmacyHashListing };
