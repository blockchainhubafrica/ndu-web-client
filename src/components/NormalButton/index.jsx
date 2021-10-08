import React from "react";
import styles from "./normalButton.module.css";

function NormalButton({ buttonText, className, bg }) {
  let classes = styles.normalButton;
  if (className) classes += ` ${className}`;

  return <div className={classes} style={{backgroundColor: bg ? bg : null}}>{buttonText}</div>;
}

export { NormalButton };
