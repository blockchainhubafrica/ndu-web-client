import React from "react";
import styles from "./regularButton.module.css";

function RegularButton({ buttonText }) {
  return <div className={`${styles.regularButton}`}>{buttonText}</div>;
}

export { RegularButton };
