import React from "react";
import { formatSize } from "../../../../utils/format-size";

import styles from "./drug.module.css";

const Drug = ({ drug, image }) => {
  return (
    <div className={`${styles.container} text-center`}>
      <img src={image} alt={`${drug.name}-img`} className="mx-auto mb-4 p-4" />
      <div className={`${styles["name"]}`}>
        <span className="font-medium">{drug.name}</span>
      </div>
      <div className={`${styles["serial-count"]} shadow-lg`}>
        {formatSize(drug["no-of-serials"])}
      </div>
    </div>
  );
};

export { Drug };
