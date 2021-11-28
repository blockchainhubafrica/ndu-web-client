import React from "react";

import styles from "./textArea.module.css";

const TextArea = ({ formik, className, name, onClick, ...rest }) => {
  const error = formik?.touched[name] && formik?.errors?.[name];
  let classes = `${styles.container} ${className} `;
  if (error) classes += styles["error"];

  if (formik) {
    Object.assign(rest, {
      onChange: formik?.handleChange,
      onBlur: formik?.handleBlur,
      value: formik?.values[name],
    });
  }

  return (
    <div className={classes}>
      <textarea
        id={rest?.id ?? name}
        name={name ?? rest?.id}
        onClick={onClick}
        {...rest}
      />
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
};

export { TextArea };
