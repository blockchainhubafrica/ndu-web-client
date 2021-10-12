import React from "react";
import { UploadDrugImage } from "../../assets";
import { Input, TextArea } from "../../components";
import { DashboardLayout } from "../../layouts";

import styles from "./pharmacy.module.css";

const PharmacyGenHash = () => {
  return (
    <DashboardLayout>
      <div className={`${styles.container} py-12 px-4 md:px-12 lg:px-20 mb-20`}>
        <h1 className="mb-16 text-xl sm:text-2xl md:text-4xl font-bold">
          Juhel Pharmacy
        </h1>
        <div>
          <h3 className="font-medium mb-4">Generate hash</h3>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="">
              <div
                className={`${styles["upload-image"]} flex items-center justify-center mb-6 md:mb-0`}
              >
                <UploadDrugImage />
                <input type="file"></input>
              </div>
            </div>
            <div className="md:col-span-2 mb-6 ">
              <div className="mb-5">
                <Input placeHolder="Drug name" className="w-full" />
              </div>
              <div className="mb-5">
                <Input placeHolder="Manufactury date" className="w-full" />
              </div>
              <div>
                <Input placeHolder="Expiry date" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <TextArea
            className="w-full"
            rows="4"
            placeHolder="Brief drug description"
          />
        </div>
        <div className="flex flex-wrap justify-between items-center my-6">
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <Input
              placeHolder="No. of Hash keys"
              type="number"
              className="w-full md:w-auto"
            />
          </div>
          <button className="px-5 py-3 md:px-10 md:py-4 ml-auto md:mt-0 md:ml-0">
            Generate
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export { PharmacyGenHash };
