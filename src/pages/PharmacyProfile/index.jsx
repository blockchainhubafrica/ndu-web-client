import React, { useEffect, useMemo, useState } from "react";
import { DashboardLayout } from "../../layouts";

import styles from "./pharmacy-profile.module.css";
import { usePharmacyContext } from "../../contexts/pharmacyContext";
import { pharmacyPic } from "../../assets";

const PharmacyProfile = () => {
  const { pharmacyDetails } = usePharmacyContext();
  return (
    <DashboardLayout>
      <div
        className={`${styles.container} container pt-12 pb-32  px-4 md:px-12 lg:px-14 xl:px-20 mb-20`}
      >
        <div className="grid grid-cols-8 gap-8">
          <div className="col-span-3">
            <div className={`${styles["profile-pic"]}`}>
              <img src={pharmacyPic} alt="A Pharmacy" />
            </div>
          </div>
          <div className="col-span-5">
            <div className={`flex flex-wrap ${styles["detail-box"]} mb-5`}>
              <span className="pr-4 block">Name:</span>
              <span>{pharmacyDetails?.name}</span>
            </div>
            <div className={`flex flex-wrap ${styles["detail-box"]} mb-5`}>
              <span className="pr-4">Iso Number:</span>
              <span>{pharmacyDetails?.isoNumber}</span>
            </div>
            <div className={`flex flex-wrap ${styles["detail-box"]} mb-5`}>
              <span className="pr-4">Address:</span>
              <span>Coming soon...</span>
            </div>
          </div>
          <div className="col-span-8">
            <div className={`${styles["description-box"]} mb-5`}>
              <p className="pr-4 mb-4">Description:</p>
              <span>Coming soon...</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export { PharmacyProfile };
