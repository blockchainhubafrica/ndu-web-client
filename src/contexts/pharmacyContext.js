import { useCallback } from "react";
import { createContext, useContext, useEffect, useState } from "react";

const pharmacyContext = createContext();

export function PharmacyProvider({ children }) {
  const [pharmacyDetails, setPharmacyDetails] = useState(null);
  const [pharmacyDrugs, setPharmacyDrugs] = useState(null);

  useEffect(() => {
    // console.log(pharmacyDrugs);
  }, [pharmacyDrugs]);

  const setDrugInventory = useCallback(() => {

  })

  // useEffect(() => {
  //   console.log(pharmacyDrugs);
  //   setIsLoading(true);
  //   if (pharmacyDrugs?.length > 0) {
  //     setIsLoading(false);
  //     return setDrugs(pharmacyDrugs);
  //   }

  //   (async () => {
  //     const inventory = await getDrugInventory();
  //     setDrugs(inventory);
  //     if (inventory.length > 0)
  //       toast.success("All Drugs were retrieved successfully");
  //     setPharmacyDrugs(drugs);
  //     setIsLoading(false);
  //   })();
  // }, [drugs, setIsLoading, toast, pharmacyId, pharmacyDrugs, setPharmacyDrugs]);


  return (
    <pharmacyContext.Provider
      value={{
        pharmacyDetails,
        setPharmacyDetails,
        pharmacyDrugs,
        setPharmacyDrugs,
      }}
    >
      {children}
    </pharmacyContext.Provider>
  );
}

export function usePharmacyContext() {
  const context = useContext(pharmacyContext);

  if (!context)
    throw new Error("usePharmacy must be used inside a `PharmacyProvider`");

  return context;
}
