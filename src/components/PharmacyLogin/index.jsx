import React from "react";
import { Link } from "react-router-dom";
import { InputPassword, RegularButton } from "..";
import { DashboardLayout } from "../../layouts";
import styles from "./pharmacyLogin.module.css";

function PharmacyLogin() {
  return (
    <DashboardLayout>
      <div className={`${styles.loginCon}`}>
        <h5>
          To access this session, enter your <br />{" "}
          <span style={{ fontWeight: 500 }}>Pharmacy Identity Number</span>
        </h5>
        <InputPassword />
        <Link to="/dashboard/pharmacy">
          <RegularButton buttonText="SIGN IN" />
        </Link>
      </div>
    </DashboardLayout>
  );
}

export { PharmacyLogin };
