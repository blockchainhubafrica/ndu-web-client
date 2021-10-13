import React from "react";

import styles from "./drug.module.css";

const Drug = ({ image, name }) => {
  return (
    <div className={`${styles.container} p-4 text-center`}>
      <img src={image} alt={`${name}-img`} className="mx-auto mb-4" />
      <p className="font-medium">{name}</p>
    </div>
  );
};

export { Drug };
