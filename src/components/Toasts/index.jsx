import { useToastContext } from "../../contexts/toastContext";
import styles from "./toasts.module.css";
import { WhiteCloseIcon } from "../../assets";
import { useEffect } from "react";

function Toast() {
  const { toastType, toastMessage, isActive, setIsActive } = useToastContext();

  const containerClass = (() => {
    if (!isActive) return `${styles["container"]} ${styles[toastType]}`;

    return `${styles["container"]} ${styles[toastType]} ${styles["active"]}`;
  })();

  useEffect(() => {
    if (!isActive) return;
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  }, [isActive, setIsActive]);

  return (
    <div className={containerClass}>
      <WhiteCloseIcon
        className={styles["close-btn"]}
        onClick={() => setIsActive(false)}
      />
      <p className={`${styles["heading"]} mb-2`}>{toastType}</p>
      <p className={`${styles["message"]}`}>{toastMessage}</p>
    </div>
  );
}

export { Toast };
