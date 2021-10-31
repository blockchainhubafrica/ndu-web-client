import React from "react";
import { WhiteCloseIcon } from "../../assets";
import { useToastContext } from "../../contexts/toastContext";
import styles from "./toasts.module.css";

function SuccessToast({ message }) {
  const { isActive, setIsActive } = useToastContext();
  const containerClass = (() => {
    if (!isActive) return `${styles["container"]} ${styles["success"]}`;

    return `${styles["container"]} ${styles["success"]} ${styles["active"]}`;
  })();

  return (
    <div className={containerClass}>
      <WhiteCloseIcon
        className={styles["close-btn"]}
        onClick={() => setIsActive(false)}
      />
      <p className={`${styles["heading"]} mb-2`}>Success</p>
      <p className={`${styles["message"]}`}>{message}</p>
    </div>
  );
}

export { SuccessToast };
