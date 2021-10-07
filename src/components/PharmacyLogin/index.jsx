import React from "react";
import { InputPassword, RegularButton } from "..";
import { DashboardLayout } from "../../layouts";
import styles from "./pharmacyLogin.module.css";

function PharmacyLogin() {
  return (
    <DashboardLayout>
      <div className={`${styles.loginCon}`}>
        <h4>
          To access this session, enter your <br />{" "}
          <span style={{ fontWeight: 500 }}>Pharmacy Identity Number</span>
        </h4>
        <InputPassword />
        <RegularButton buttonText="SIGN IN" />
      </div>
    </DashboardLayout>
  );
}

export { PharmacyLogin };
