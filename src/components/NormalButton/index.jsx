import React from "react";
import styles from "./normalButton.module.css";

function NormalButton({ buttonText, className }) {
  let classes = styles.normalButton;
  if (className) classes += ` ${className}`;

  return <div className={classes}>{buttonText}</div>;
}

export { NormalButton };
