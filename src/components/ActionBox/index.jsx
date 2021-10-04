import React from "react";
import styles from "./action-box.module.css";

function ActionBox({ image, title, imgWidth, imgHeight }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={image}
          alt=""
          width={imgWidth || 100}
          height={imgHeight || 100}
        />
      </div>
      <div className={styles.content}>{title}</div>
    </div>
  );
}

export { ActionBox };
