import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { ArrowLeft } from "../../assets";
import { Pagination } from "../../components";
import { useUserContext } from "../../contexts/userContext";
import { DashboardLayout } from "../../layouts";
import {
  getDrugInventory,
  getNduBaseContract,
  getRegisterContract,
} from "../../services/web3Services";
import { Drug } from "./components";

import styles from "./pharmacyDrugInventory.module.css";
import { ethers } from "ethers";
import { useLoadingContext } from "../../contexts/loadingContext";
import { useToastContext } from "../../contexts/toastContext";
import { ipfsBaseUrl } from "../../utils";
<<<<<<< Updated upstream
import { usePharmacyContext } from "../../contexts/pharmacyContext";
=======
>>>>>>> Stashed changes

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
  const { setIsLoading } = useLoadingContext();
  const { toast } = useToastContext();
  const { pharmacyDetails, pharmacyDrugs, setPharmacyDrugs } =
    usePharmacyContext();
  const [drugs, setDrugs] = useState(pharmacyDrugs);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  const displayData = useMemo(() => {
    if (!drugs) return [];
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return drugs?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, drugs]);

  useEffect(() => {
    console.log({ drugs, pharmacyDrugs });
    if (drugs && pharmacyDrugs) return;
    setIsLoading(true);

    (async () => {
<<<<<<< Updated upstream
      const inventory = await getDrugInventory();
      setDrugs(inventory);
      if (inventory.length > 0)
        toast.success("All Drugs were retrieved successfully");
      setPharmacyDrugs(drugs);
      setIsLoading(false);
=======
      const NduBaseContract = await getNduBaseContract(signer);
      // console.log(NduBaseContract);
      // const serialNo = randomNumber();
      // console.log({ serialNo });
      const drugRequests = serials.map((serial) =>
        NduBaseContract.drugDetails(serial)
      );

      const hashPromises = await Promise.allSettled(drugRequests);

      const hashes = [];
      hashPromises.forEach((drug) => {
        if (drug.status === "fulfilled" && drug.value !== "")
          hashes.push(drug.value);
      });

      if (!hashes.length) {
        setDrugs([]);
        return setIsLoading(false);
      }

      const drugDataFromIPFS = hashes.map((hash) =>
        fetch(`${ipfsBaseUrl}/${hash}`).then((data) => data.json())
      );

      const retrievedDrugPromises = await Promise.allSettled(drugDataFromIPFS);

      const retrievedDrugs = retrievedDrugPromises.map((drug) => {
        if (drug.status === "fulfilled") return drug.value;
        return drug;
      });

      setDrugs(retrievedDrugs);
      setIsLoading(false);
      toast.success("All Drugs were retrieved successfully");

      console.log(retrievedDrugs);
>>>>>>> Stashed changes
    })();
  }, [drugs, pharmacyDrugs, setIsLoading, setPharmacyDrugs, toast]);

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
              totalCount={drugs?.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h3 className="font-medium text-xl">Drug Inventory</h3>
        </div>
        {drugs && !drugs.length && (
          <div className="text-lg">No Drugs are registered.</div>
        )}
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`}>
          {displayData.map((item, index) => (
            <div
              key={index + item.name}
              className="cursor-pointer"
              onClick={() =>
                history.push(`/dashboard/pharmacy/drugs/${index + 1}`)
              }
            >
              <Drug
                image={`https://ipfs.io/ipfs/${item.imageHash}`}
                name={item.name}
              />
            </div>
          ))}
        </div>
        <div className="mt-10 md:hidden flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalCount={drugs?.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export { PharmacyDrugInventory };
