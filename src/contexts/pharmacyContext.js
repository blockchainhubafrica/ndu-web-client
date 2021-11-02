import { createContext, useContext, useState } from "react";

const pharmacyContext = createContext();

export function PharmacyProvider({ children }) {
  const [pharmacyDetails, setPharmacyDetails] = useState(null);
  const [pharmacyDrugs, setPharmacyDrugs] = useState([]);

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
