import React, { useState } from "react";
import styles from "./input.module.css";

function Input({ type, onClick, label, className, id, name, formik, ...rest }) {
  const [inputType, setType] = useState(type);
  
  const error = formik?.touched[name] && formik?.errors?.[name];
  const lowerLabel = label?.toLowerCase();
  let classes = `${styles.container} ${className} `;
  if (error) classes += styles["error"];
  let placeholder = rest?.placeholder;
  if (label) placeholder = `Enter ${lowerLabel}`;

  if (rest.isdate) rest.onFocus = () => setType("date");

  if (formik) {
    Object.assign(rest, {
      onChange: formik?.handleChange,
      onBlur: formik?.handleBlur,
      value: formik?.values[name],
    });
  }
  return (
    <div className={classes}>
      {label && (
        <label className="mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={id ?? name}
        name={name ?? id}
        type={inputType}
        onClick={onClick}
        error={error}
        {...rest}
        placeholder={placeholder}
      />
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
}

export { Input };
