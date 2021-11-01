import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import {
  getActiveWallet,
  getCompanyDetails,
  hasEthereum,
} from "../services/web3Services";

import { useHistory } from "react-router-dom";
import { useToastContext } from "./toastContext";
import { useLoadingContext } from "./loadingContext";

const pharmacyContext = createContext();

export function PharmacyProvider({ children }) {
  const { setIsLoading } = useLoadingContext();
  const [pharmacyDetails, setPharmacyDetails] = useState(null);
  const [pharmacyDrugs, setPharmacyDrugs] = useState([]);

  useEffect(() => {
    if (!hasEthereum()) return;
    (async () => {
      setIsLoading(true);
      const details = await getCompanyDetails();
      setPharmacyDetails(details);
      setIsLoading(false);
      console.log(details);
    })();
  }, [setIsLoading]);

  useEffect(() => {
    console.log(pharmacyDetails);
  }, [pharmacyDetails]);

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
