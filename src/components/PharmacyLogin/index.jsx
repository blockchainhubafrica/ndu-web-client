import React from "react";
import { InputPassword, RegularButton } from "..";
import styles from "./pharmacyLogin.module.css";

function PharmacyLogin() {
  return (
    <div className="centerCon">
      <div className={`${styles.loginCon}`}>
        <h4>To access this session, enter your <br /> <span style={{fontWeight: 500}}>Pharmacy Identity Number</span></h4>
        <InputPassword />
        <RegularButton buttonText="SIGN IN" />
      </div>
    </div>
  );
}

export { PharmacyLogin };
