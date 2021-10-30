import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { ArrowLeft, drug } from "../../assets";
import { Pagination } from "../../components";
import { useUserContext } from "../../contexts/userContext";
import { DashboardLayout } from "../../layouts";
import { Drug } from "./components";

import styles from "./pharmacyDrugInventory.module.css";

const dummyData = [
  "Acetaminophen",
  "Adderall",
  "Amitriptyline",
  "Doxycycline",
  "Lisinopril",
  "Pantoprazole",
  "Otezla",
  "Rybelsus",
  "Tramadol",
  "Wellbutrin",
  "Probuphine",
  "Hydrochlorothiazide",
  "Ibuprofen",
  "Cephalexin",
  "Bunavail",
];

let PageSize = 6;

const PharmacyDrugInventory = () => {
  const { user } = useUserContext();
  const [currentPage, setCurrentPage] = useState(1);

  const history = useHistory();

  const displayData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dummyData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
          {user?.pharmacyDetails?.name}
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
              totalCount={dummyData.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h3 className="font-medium text-xl">Drug Inventory</h3>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`}>
          {displayData.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => history.push("/dashboard/pharmacy/drugs/1")}
            >
              <Drug image={drug} name={item} />
            </div>
          ))}
        </div>
        {/* Mobile Devices */}
        <div className="mt-10 md:hidden flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalCount={dummyData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export { PharmacyDrugInventory };
