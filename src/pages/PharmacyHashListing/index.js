import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ArrowLeft } from "../../assets";
import { Input } from "../../components";
import { useUserContext } from "../../contexts/userContext";
import { DashboardLayout } from "../../layouts";
import { HashListItem } from "./components";

import styles from "./pharmacyHashListing.module.css";

const PharmacyHashListing = () => {
  const { user } = useUserContext();
  return (
    <DashboardLayout>
      <div
        className={`${styles.container}  container  pt-12  px-4 md:px-12 lg:px-14 xl:px-20 mb-20`}
      >
        <div className="flex flex-wrap justify-between mb-14">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-2">
          {user?.pharmacyDetails?.name}
          </h1>

          <Input placeholder="Search hash address" />
        </div>
        <div className="mb-6">
          <Link to="/dashboard/pharmacy/drugs">
            <ArrowLeft className="inline-block mr-4" />
            <span className="text-sm">Back</span>
          </Link>
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
