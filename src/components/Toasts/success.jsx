import React from "react";
import styles from "./toasts.module.css";

function SuccessToast({ message }) {
  return (
    <div className={`${styles["success-toast"]} ${styles["active"]}`}>
      <p className={`${styles["heading"]} mb-2`}>Success</p>
      <p className={`${styles["message"]}`}>{message}</p>
    </div>
  );
}

export { SuccessToast };
