import React from "react";
import { NormalButton } from "..";
import styles from "./inputWithButton.module.css";

function InputWithButton() {
  return (
    <form className={`${styles.inputWithButton}`}>
      <input
        type="text"
        className={`${styles.inputWithButtonInput}`}
        placeholder="Enter your email address"
      />
      <NormalButton buttonText="Subscribe" />
    </form>
  );
}

export { InputWithButton };
