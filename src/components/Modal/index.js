import React from "react";
import { CloseIcon } from "../../assets";
import { useLockBodyScroll } from "../../hooks";
import { isExpired } from "../../utils";

import styles from "./modal.module.css";

const Modal = ({ children, closeModal, data }) => {
  const checkDrugType = ({ drugDetails }) => {
    console.log(drugDetails);
    if (isExpired(drugDetails["expiry-date"])) return "expired";
    return "original";
  };
  const type = checkDrugType(data);
  useLockBodyScroll();
  return (
    <>
      <div
        className={`${styles["container"]} slim-scroll`}
        onClick={closeModal}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${styles["sub-container"]} `}
          id="main-card"
        >
          <CloseIcon
            className={`${styles["close-icon"]}`}
            onClick={closeModal}
          />
          <div className="">
            <div className={`${styles[`modal-body`]} slim-scroll`}>
              <div className="md:text-center mb-7">
                <p className="mb-4 font-bold text-primary-blue text-xl">
                  {data.drugDetails.name}
                </p>
                <p>Manufactured by {data.pharmacy.name}</p>
              </div>
              <div className="grid grid-cols-11 gap-3">
                <div className="col-span-4 md:col-span-4 order-2 md:order-1">
                  <img
                    src={data.drugDetails.imageUrl}
                    alt={data.drugDetails.name}
                  />
                </div>
                <div className="col-span-full md:col-span-7 mt-6 order-1 md:order-2">
                  <div className={`grid grid-cols-5 mb-4`}>
                    <span className="pr-4 col-span-2 font-bold text-primary-blue">
                      Manufactured:
                    </span>
                    <span className="ml-auto col-span-3">
                      {data.drugDetails["manufacture-date"]}
                    </span>
                  </div>
                  <div className={`grid grid-cols-5 mb-4`}>
                    <span className="pr-4 col-span-2 font-bold text-primary-blue">
                      Expires:
                    </span>
                    <span className="ml-auto col-span-3">
                      {data.drugDetails["expiry-date"]}
                    </span>
                  </div>
                  <div className={`grid grid-cols-5 mb-4`}>
                    <span className="pr-4 col-span-2 font-bold text-primary-blue">
                      Sold by:
                    </span>
                    <span className="ml-auto col-span-3">Coming soon...</span>
                  </div>
                  <div className={`grid grid-cols-5 mb-4`}>
                    <span className="pr-4 col-span-2 font-bold text-primary-blue">
                      Warehoused:
                    </span>
                    <span className="ml-auto col-span-3">Coming soon...</span>
                  </div>
                </div>
                <div className="col-span-7 md:col-span-full order-3 mt-5">
                  {data.drugDetails.description}
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles[`footer-text-bg-${type}`]} py-6`}>
            <h1 className="text-center">{type}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export { Modal };
