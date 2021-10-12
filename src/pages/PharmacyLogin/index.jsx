import React from "react";
import { Link } from "react-router-dom";
import { BigScan } from "../../assets";
import { InputPassword, RegularButton } from "../../components";
import { DashboardLayout } from "../../layouts";
import styles from "./pharmacyLogin.module.css";

function PharmacyLogin() {
  return (
    <DashboardLayout>
      <div className={`${styles.loginCon} pt-24 lg:pt-64`}>
        <h5 className="text-xl">
          To access this session, enter your <br />{" "}
          <span style={{ fontWeight: 500 }}>Pharmacy Identity Number</span>
        </h5>
        <InputPassword />
        <Link to="/dashboard/pharmacy">
          <RegularButton buttonText="SIGN IN" />
        </Link>
      </div>
      <div className={`${styles.circularButton}`}>
        <BigScan />
      </div>
    </DashboardLayout>
  );
}

export { PharmacyLogin };
