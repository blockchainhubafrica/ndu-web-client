import React from "react";

import styles from "./textArea.module.css";

const TextArea = ({ onClick, ...rest }) => {
  return (
    <div className={styles.container}>
      <textarea onClick={onClick} {...rest} />
    </div>
  );
};

export { TextArea };
