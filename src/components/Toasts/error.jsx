import React from "react";
import { CloseIcon } from "../../assets";
import { useToastContext } from "../../contexts/toastContext";
import styles from "./toasts.module.css";

function ErrorToast({ message }) {
  const { isActive, setIsActive } = useToastContext();

  return (
    <div
      className={`${styles["container"]} ${styles["error"]} ${styles["active"]}`}
    >
      <CloseIcon />
      <p className={`${styles["heading"]} mb-2`}>Success</p>
      <p className={`${styles["message"]}`}>{message}</p>
    </div>
  );
}

export { ErrorToast };
