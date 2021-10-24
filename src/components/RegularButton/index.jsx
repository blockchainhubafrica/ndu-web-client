import React from "react";
import styles from "./regularButton.module.css";

function RegularButton({ text, onClick, children }) {
  return (
    <button onClick={onClick} className={`${styles.regularButton}`}>
      {text ?? children}
    </button>
  );
}

export { RegularButton };
