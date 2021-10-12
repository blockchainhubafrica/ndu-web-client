import React from "react";
import { CloseIcon } from "../../assets";

import styles from "./modal.module.css";

const Modal = ({ children, type, displayModal, closeModal }) => {
  return (
    <>
      {displayModal ? (
        <div className={`${styles.container}`} onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles["sub-container"]} `}
            id="main-card"
          >
            <CloseIcon onClick={closeModal ? closeModal : ""} />
            <div className="mt-24">{children}</div>
            <div className={`${styles[`footer-text-bg-${type}`]} py-6`}>
              <h1 className="text-center">{type}</h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { Modal };
