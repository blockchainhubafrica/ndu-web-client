import React from "react";
import styles from "./input.module.css";

function Input({ type, onClick, ...rest }) {
  return (
    <div className={styles.container}>
      <input type={type} onClick={onClick} {...rest} />
    </div>
  );
}

export { Input };
