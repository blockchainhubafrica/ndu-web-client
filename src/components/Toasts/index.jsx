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
      if (!isDisplayingToast) return;
      setIsDisplayingToast(false);
    }, 3000);
  }, [isDisplayingToast, setIsDisplayingToast]);

  return (
    <div className={containerClass}>
      <button
        className={`${styles["close-btn"]} p-3`}
        onClick={() => setIsDisplayingToast(false)}
      >
        <WhiteCloseIcon />
      </button>
      <p className={`${styles["heading"]} mb-2`}>{toastType}</p>
      <p className={`${styles["message"]}`}>{toastMessage}</p>
      <div className={styles["progress-bar"]}></div>
    </div>
  );
}

export { Toast };
