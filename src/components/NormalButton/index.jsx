import React from "react";
import styles from "./normalButton.module.css";

function NormalButton({ children, buttonText, className, bg, ...rest }) {
  let classes = styles.normalButton;
  if (className) classes += ` ${className}`;

  return (
    <button
      className={classes}
      style={{ backgroundColor: bg ? bg : null }}
      {...rest}
    >
      {children ?? buttonText}
    </button>
  );
}

export { NormalButton };
