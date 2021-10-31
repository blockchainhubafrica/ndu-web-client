import { useToastContext } from "../../contexts/toastContext";
import styles from "./toasts.module.css";
import { WhiteCloseIcon } from "../../assets";
import { useEffect } from "react";

function Toast() {
  const { toastType, toastMessage, isDisplayingToast, setIsDisplayingToast } =
    useToastContext();

  const containerClass = (() => {
    if (!isDisplayingToast)
      return `${styles["container"]} ${styles[toastType]}`;

    return `${styles["container"]} ${styles[toastType]} ${styles["active"]}`;
  })();

  useEffect(() => {
    if (!isDisplayingToast) return;
    setTimeout(() => {
      setIsDisplayingToast(false);
    }, 3000);
  }, [isDisplayingToast, setIsDisplayingToast]);

  return (
    <div className={containerClass}>
      <WhiteCloseIcon
        className={styles["close-btn"]}
        onClick={() => setIsDisplayingToast(false)}
      />
      <p className={`${styles["heading"]} mb-2`}>{toastType}</p>
      <p className={`${styles["message"]}`}>{toastMessage}</p>
    </div>
  );
}

export { Toast };
