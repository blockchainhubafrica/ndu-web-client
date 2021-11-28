import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "../../assets";
import { Input } from "../../components";
import { usePharmacyContext } from "../../contexts/pharmacyContext";
import { DashboardLayout } from "../../layouts";
import { getAllDrugSerials } from "../../services/web3Services";
import { isExpired } from "../../utils";
import { HashListItem } from "./components";

import styles from "./pharmacyHashListing.module.css";
import { formatDate } from "./../../utils/toolkit";

const PharmacyHashListing = () => {
  const { id } = useParams();
  const { pharmacyDetails, pharmacyDrugs } = usePharmacyContext();
  const drug = pharmacyDrugs?.find((item) => item.hash === id);

  const [serials, setSerials] = useState(null);
  const [status, setStatus] = useState(null);
  console.log(drug);
  useEffect(() => {
    (async () => {
      if (serials !== null) return;
      const keys = await getAllDrugSerials(id);
      setSerials(keys);
    })();
  }, [id, serials]);

  useEffect(() => {
    if (!drug && !status) return;
    let value;
    if (isExpired(drug?.["expiry-date"])) value = "expired";
    if (!isExpired(drug?.["expiry-date"])) value = "original";
    setStatus(value);
  }, [drug, status]);
  return (
    <DashboardLayout>
      <div
        className={`${styles.container}  container  pt-12  px-4 md:px-12 lg:px-14 xl:px-20 mb-20`}
      >
        <div className="flex flex-wrap justify-between mb-14">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-2">
            {pharmacyDetails?.name}
          </h1>

          <Input placeholder="Search hash address" />
        </div>
        <div className="mb-6">
          <Link to={`/dashboard/pharmacy/drugs/${id}`}>
            <ArrowLeft className="inline-block mr-4" />
            <span className="text-sm">Back</span>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h3 className="font-medium text-xl">{drug?.name}</h3>
          <h4 className="text-sm">
            Registered On: {<p>{formatDate(drug?.["registration-date"])}</p>}
          </h4>
        </div>
        <div>
          {serials?.length > 0 &&
            serials.map((item, index) => (
              <div key={item} className="mb-5">
                <HashListItem status={status} address={item} />
              </div>
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export { PharmacyHashListing };
