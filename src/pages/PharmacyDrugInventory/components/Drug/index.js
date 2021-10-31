import React from "react";

import styles from "./drug.module.css";

const Drug = ({ image, name }) => {
  return (
    <div className={`${styles.container} text-center`}>
      <img src={image} alt={`${name}-img`} className="mx-auto mb-4 p-4" />
      <div>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
};

export { Drug };
