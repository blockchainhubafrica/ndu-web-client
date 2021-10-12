import React from "react";
import { CloseIcon } from "../../assets";
import { useLockBodyScroll } from "../../hooks";

import styles from "./modal.module.css";

const Modal = ({ children, type, displayModal, closeModal }) => {
  useLockBodyScroll();
  return (
    <>
      {displayModal && (
        <div className={`${styles.container}`} onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles["sub-container"]} `}
            id="main-card"
          >
            <CloseIcon
              className={`${styles["close-icon"]}`}
              onClick={closeModal}
            />
            <div className="mt-24">{children}</div>
            <div className={`${styles[`footer-text-bg-${type}`]} py-6`}>
              <h1 className="text-center">{type}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
