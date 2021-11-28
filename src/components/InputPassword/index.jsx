import React from "react";
import styles from "./inputPassword.module.css";

function InputPassword({ onClick, ...rest }) {
  return (
    <div className={`${styles.passwordContainer} flex flex-col`}>
      <label htmlFor="password" className="mb-3">
        Pharmacy Identity Number
      </label>

      <input
        name="password"
        type="password"
        onClick={onClick}
        {...rest}
        className={styles.password}
      />
    </div>
  );
}

export { InputPassword };
