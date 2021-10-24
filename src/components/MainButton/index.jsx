import React from "react";
import { ButtonScan } from "../../assets";
import styles from "./mainButton.module.css";

function MainButton({ buttonText, bg, mt, buttonIcon, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${styles.mainButton} shadow-lg`}
      style={{
        backgroundColor: bg ? bg : "#022655",
      }}
    >
      <ButtonScan className={`${styles.buttonScan}`} />
      <span className={`${styles.buttonText}`}>{buttonText}</span>
    </div>
  );
}

export { MainButton };
