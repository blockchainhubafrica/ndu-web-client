import React from "react";
import { ArrowLeft } from "../../assets";
import { usePharmacyContext } from "../../contexts/pharmacyContext";
import { DashboardLayout } from "../../layouts";
import styles from "./pharmacy-drug-details.module.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { formatDate } from "./../../utils/toolkit";
import { NormalButton, RegularButton } from "../../components";

function PharmacyDrugDetails(props) {
  const history = useHistory();
  const { id } = useParams();
  const { pharmacyDetails, pharmacyDrugs } = usePharmacyContext();
  const drug = pharmacyDrugs?.find((item) => item.hash === id);
  
  const image = `https://ipfs.io/ipfs/${drug?.imageHash}`;
  
  return (
    <DashboardLayout>
      <div
        className={`${styles["container"]} container pt-12 pb-32  px-4 md:px-12 lg:px-14 xl:px-20 mb-20`}
      >
        <div className="mb-6 md:mb-10 ">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
            {pharmacyDetails?.name}
          </h1>
        </div>
        <div className="mb-6 flex flex-wrap justify-between items-center">
          <div
            className="text-sm cursor-pointer"
            onClick={() => history.replace("/dashboard/pharmacy")}
          >
            <span>
              <ArrowLeft className="inline-block mr-4" />
            </span>
            <span className="text-sm">Back</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h3 className="font-medium text-xl">Drug Details</h3>
        </div>
        <div className="grid grid-cols-3 gap-x-10">
          <div
            className={`${styles["img-container"]} order-2 md:order-1 col-span-full md:col-span-1 p-4 mb-4`}
          >
            <img
              src={image}
              alt={`${drug?.name}-img`}
              className="mx-auto mb-4 p-4"
            />
          </div>
          <div className="col-span-full md:col-span-2 order-1 md:order-2">
            <div className="mb-7">
              <p
                className={`${styles["drug-title"]} mb-4 font-semi-bold text-primary-blue text-xl`}
              >
                {drug?.name}
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2">
              <div className={`${styles["detail-box"]} mb-6`}>
                <p>Manufactured</p>
                <p>{formatDate(drug["manufacture-date"])}</p>
              </div>
              <div className={`${styles["detail-box"]} mb-6`}>
                <p>Expires on</p>
                <p>{formatDate(drug["expiry-date"])}</p>
              </div>
              <div className={`${styles["detail-box"]} mb-6`}>
                <p>Registered packs</p>
                <p>{drug["no-of-serials"]}</p>
              </div>
              <div className={`${styles["detail-box"]} mb-6`}>
                <p>Registered On</p>
                <p>{drug?.["registration-date"]}</p>
              </div>
            </div>
            <Link to={`/dashboard/pharmacy/drugs/${id}/serials`}>
              <div className={`${styles["register-btn"]}`}>
                <NormalButton buttonText="Registered Serials" />
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-medium mb-1">Description:</p>
          <p className="font-thin">{drug?.description}</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export { PharmacyDrugDetails };
