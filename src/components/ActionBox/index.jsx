import React from "react";
import styles from "./action-box.module.css";

function ActionBox({ children, image, title }) {
  
  return (
    <div className={styles.container}>
      <div className={styles.image}>{children}</div>
      <div className={styles.content}>{title}</div>
    </div>
  );
}

export { ActionBox };
