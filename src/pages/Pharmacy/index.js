import React from "react";
import { Input } from "../../components";

import styles from "./pharmacy.module.css";

const Pharmacy = () => {
  return (
    <div className="py-12">
      <h1 className="mb-16 text-xl sm:text-2xl md:text-4xl font-bold">
        Juhel Pharmacy
      </h1>
      <div>
        <h3>Generate hash</h3>
        <div>
          <Input placeHolder="Drug name" />
        </div>
        <div>
          <Input placeHolder="Manufactury date" />
        </div>
        <div>
          <Input placeHolder="Expiry date" />
        </div>
      </div>
    </div>
  );
};

export { Pharmacy };
