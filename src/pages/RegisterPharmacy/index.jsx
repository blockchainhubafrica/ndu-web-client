import React from "react";
import { BigScan } from "../../assets";
import { DashboardLayout } from "../../layouts";
import styles from "./register-pharmacy.module.css";
import PharmacySignUpForm from "./../../components/Forms/PharmacySignUp/index";

function RegisterPharmacy() {
  return (
    <DashboardLayout>
      <div
        className={`${styles.loginCon}  pt-4 sm:pt-10 lg:pt-20   justify-center`}
      >
        <div className="container sm:px-24  2xl:px-48  ">
          <div className="text-xl text-white text-center mb-8 sm:mb-12">
            <span className="block font-extralight">
              To access this session, enter your
            </span>
            <span className="font-medium">Pharmacy Identity Number</span>
          </div>
          <PharmacySignUpForm />
        </div>
      </div>
      <div className={`${styles.circularButton} flex lg:hidden`}>
        <BigScan />
      </div>
    </DashboardLayout>
  );
}

export { RegisterPharmacy };
