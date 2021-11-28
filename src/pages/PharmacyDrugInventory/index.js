import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { ArrowLeft } from "../../assets";
import { Pagination } from "../../components";
import { DashboardLayout } from "../../layouts";
import { getDrugInventory } from "../../services/web3Services";
import { Drug } from "./components";

import styles from "./pharmacyDrugInventory.module.css";
import { useLoadingContext } from "../../contexts/loadingContext";
import { useToastContext } from "../../contexts/toastContext";
import { usePharmacyContext } from "../../contexts/pharmacyContext";

// const dummyData = [
//   "Acetaminophen",
//   "Adderall",
//   "Amitriptyline",
//   "Doxycycline",
//   "Lisinopril",
//   "Pantoprazole",
//   "Otezla",
//   "Rybelsus",
//   "Tramadol",
//   "Wellbutrin",
//   "Probuphine",
//   "Hydrochlorothiazide",
//   "Ibuprofen",
//   "Cephalexin",
//   "Bunavail",
// ];

let PageSize = 6;

const PharmacyDrugInventory = () => {
  const { pharmacyDetails, pharmacyDrugs } = usePharmacyContext();
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  // console.log(pharmacyDrugs);

  const displayData = useMemo(() => {
    if (!pharmacyDrugs) return [];
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return pharmacyDrugs?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pharmacyDrugs]);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  return (
    <DashboardLayout>
      <div
        className={`${styles.container} container pt-12 pb-32  px-4 md:px-12 lg:px-14 xl:px-20 mb-20`}
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
          {/* Desktop & Tablets */}
          <div className="hidden md:inline-block">
            <Pagination
              currentPage={currentPage}
              totalCount={pharmacyDrugs?.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h3 className="font-medium text-xl">Drug Inventory</h3>
        </div>
        {pharmacyDrugs && !pharmacyDrugs.length && (
          <div className="text-lg">No Drugs are registered.</div>
        )}
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`}>
          {displayData.map((item, index) => (
            <div
              key={index + item.name}
              className="cursor-pointer"
              onClick={() =>
                history.push(`/dashboard/pharmacy/drugs/${item.hash}`)
              }
            >
              <Drug
                drug={item}
                image={`https://ipfs.io/ipfs/${item.imageHash}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-10 md:hidden flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalCount={pharmacyDrugs?.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export { PharmacyDrugInventory };
