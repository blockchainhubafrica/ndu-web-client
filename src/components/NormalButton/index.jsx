import React from "react";
import styles from "./normalButton.module.css";

function NormalButton({ children, buttonText, className, bg, onClick }) {
  let classes = styles.normalButton;
  if (className) classes += ` ${className}`;

  return (
    <div
      className={classes}
      style={{ backgroundColor: bg ? bg : null }}
      onClick={onClick}
    >
      {children ?? buttonText}
    </div>
  );
}

export { NormalButton };
