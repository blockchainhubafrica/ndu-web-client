import React from "react";
import styles from "./modal.module.css";

function OriginalDrug({ data }) {
  return (
    <div className={`${styles["original-container"]}`}>
      <p className="mb-5 font-bold text-primary-blue text-xl">
        {data.drugDetails.name}
      </p>
      <p>Manufactured by {data.pharmacy.name}</p>
      <div className="mt-6">
        <div className={`mb-4`}>
          <span className="pr-4 font-bold text-primary-blue">
            Manufactured:
          </span>
          <span className="">{data.drugDetails["manufacture-date"]}</span>
        </div>
        <div className={`mb-4`}>
          <span className="pr-4 font-bold text-primary-blue">Expires:</span>
          <span className="">{data.drugDetails["expiry-date"]}</span>
        </div>
        <div className={`mb-4`}>
          <span className="pr-4 font-bold text-primary-blue">Sold by:</span>
          <span className="">Coming soon...</span>
        </div>
        <div className={`mb-4`}>
          <span className="pr-4 font-bold text-primary-blue">Warehoused:</span>
          <span className="">Coming soon...</span>
        </div>
      </div>
      <div className="grid grid-cols-6 pb-4">
        <div className="col-span-2">
          <img src={data.drugDetails.imageUrl} alt={data.drugDetails.name} />
        </div>
        <div className="col-span-4">{data.drugDetails.description}</div>
      </div>
    </div>
  );
}

export default OriginalDrug;
