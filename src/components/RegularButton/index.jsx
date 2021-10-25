import React from "react";
import styles from "./regularButton.module.css";

function RegularButton({ type, text, onClick, children }) {
  return (
    <button type={"submit"} onClick={onClick} className={`${styles.regularButton}`}>
      {text ?? children}
    </button>
  );
}

export { RegularButton };
