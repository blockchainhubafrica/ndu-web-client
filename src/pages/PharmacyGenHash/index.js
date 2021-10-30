import React from "react";
import { ArrowLeft } from "../../assets";
import { DrugRegistration } from "../../components/Forms/DrugRegistration";
import { useUserContext } from "../../contexts/userContext";
import { DashboardLayout } from "../../layouts";

import styles from "./pharmacy.module.css";
import { useHistory } from "react-router-dom";

const PharmacyGenHash = () => {
  const { user } = useUserContext();
  const history = useHistory();
  return (
    <DashboardLayout>
      <div
        className={`${styles.container} container py-12 px-4 md:px-12 lg:px-14 xl:px-20 mb-20`}
      >
        <div className="mb-6 md:mb-10">
          <h1 className=" text-xl sm:text-2xl md:text-4xl font-bold">
            {user?.pharmacyDetails?.name}
          </h1>
          <div
            className="cursor-pointer inline-block mt-4"
            onClick={() => history.replace("/dashboard/pharmacy")}
          >
            <span>
              <ArrowLeft className="inline-block mr-4" />
            </span>
            <span className="">Back</span>
          </div>
        </div>
        <DrugRegistration />
      </div>
    </DashboardLayout>
  );
};

export { PharmacyGenHash };
