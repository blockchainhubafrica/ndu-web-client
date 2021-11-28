import React from "react";
import { NormalButton } from "..";
import styles from "./inputWithButton.module.css";

function InputWithButton({ placeholder }) {
  return (
    <div className={styles["container"]}>
      <input type="text" placeholder={placeholder} />
      <div className="hidden md:block">
        <NormalButton buttonText="Subscribe" />
      </div>
    </div>
  );
}

export { InputWithButton };
