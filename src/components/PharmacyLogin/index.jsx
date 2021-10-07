import React from "react";
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
        <RegularButton buttonText="SIGN IN" />
      </div>
    </DashboardLayout>
  );
}

export { PharmacyLogin };
