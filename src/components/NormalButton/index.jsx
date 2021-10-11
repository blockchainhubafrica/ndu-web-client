import React from "react";
import styles from "./normalButton.module.css";

function NormalButton({ buttonText, className, bg, action }) {
  let classes = styles.normalButton;
  if (className) classes += ` ${className}`;

  return <div className={classes} style={{backgroundColor: bg ? bg : null}} onClick={action}>{buttonText}</div>;
}

export { NormalButton };
