import React, { useState } from "react";

import styles from "./hashListItem.module.css";

const HashListItem = ({ status, address }) => {
  console.log(status);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`${styles.container} ${styles[status]} flex flex-wrap items-center justify-between px-6 py-4`}
    >
      <p>{address}</p>
      {isHovering ? (
        <p>View in Etherscan</p>
      ) : (
        <p className="capitalize">{status}</p>
      )}
    </div>
  );
};

export { HashListItem };
