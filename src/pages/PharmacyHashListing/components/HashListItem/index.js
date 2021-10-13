import React from "react";

import styles from "./hashListItem.module.css";

const HashListItem = ({ address }) => {
  return (
    <div
      className={`${styles.container} flex flex-wrap items-center justify-between px-6 py-4`}
    >
      <p>{address}</p>
      <p>View in Etherscan</p>
    </div>
  );
};

export { HashListItem };
