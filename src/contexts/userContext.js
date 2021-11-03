import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import {
  connectToMetaMask,
  getActiveWallet,
  listenToAccountChanges,
  hasEthereum,
  unmountEthListeners,
  userHasPharmacy,
  getCompanyDetails,
} from "../services/web3Services";

import { useHistory } from "react-router-dom";
import { useToastContext } from "./toastContext";
import { useLoadingContext } from "./loadingContext";
import { usePharmacyContext } from "./pharmacyContext";

const userContext = createContext();

export function UserProvider({ children }) {
  const { toast } = useToastContext();
  const { setIsLoading } = useLoadingContext();
  const { setPharmacyDetails } = usePharmacyContext();
  const history = useHistory();
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetaMask, setHasMetaMask] = useState(true);
  const [scanner, setScanner] = useState(false);

  const [user, setUser] = useState({ address: null, hasPharmacy: false });

  const setAddress = useCallback(
    (address) => {
      return (() => {
        let updatedUser = { ...user };
        updatedUser.address = address;
        setUser(updatedUser);
        setIsConnected(true);
      })();
    },
    [user]
  );

  const setHasPharmacy = useCallback(
    (hasPharmacy) => {
      let updatedUser = { ...user };
      updatedUser.address = getActiveWallet();
      updatedUser.hasPharmacy = hasPharmacy;
      setUser(updatedUser);
    },
    [user]
  );

  const handleWalletConnect = useCallback(() => {
    return (async () => {
      setIsLoading(true);
      const connectionStatus = await connectToMetaMask();
      if (!connectionStatus) return false;

      const address = getActiveWallet();
      setAddress(address);

      const hasPharmacy = await userHasPharmacy();
      setHasPharmacy(hasPharmacy);

      const details = await getCompanyDetails();
      setPharmacyDetails(details);

      setIsConnected(true);

      localStorage.setItem("wallet-connection", true);

      setIsLoading(false);

      return true;
    })();
  }, [setAddress, setIsLoading, setHasPharmacy, setPharmacyDetails]);

  const resetValues = useCallback(() => {
    return (async () => {
      setIsLoading(true);

      const address = getActiveWallet();
      setAddress(address);

      const hasPharmacy = await userHasPharmacy();
      setHasPharmacy(hasPharmacy);

      const details = await getCompanyDetails();
      setPharmacyDetails(details);

      setIsConnected(true);

      localStorage.setItem("wallet-connection", true);

      setIsLoading(false);

      return true;
    })();
  }, [setAddress, setIsLoading, setHasPharmacy, setPharmacyDetails]);


  const handleWalletDisconnect = () => {
    setIsConnected(false);
    localStorage.removeItem("wallet-connection");
    setTimeout(() => {
      history.replace("/");
    }, 0);
  };

  const handleAccountChanged = (address) => {
    if (!address) return handleWalletDisconnect();
    resetValues();
  };

  useEffect(() => {
    if (!isInitiallyFetched) return;

    if (!hasEthereum()) return;
    listenToAccountChanges(handleAccountChanged);

    return unmountEthListeners();
  });

  useEffect(() => {
    if (isInitiallyFetched) return;
    if (!hasEthereum()) {
      toast.error("Please Install Meta Mask");
      return setHasMetaMask(false);
    }
    const isInjected = localStorage.getItem("wallet-connection");
    if (!isInjected) return setIsInitiallyFetched(true);

    handleWalletConnect();
    setIsInitiallyFetched(true);
    return;
  }, [handleWalletConnect, isInitiallyFetched]);

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        isConnected,
        setIsConnected,
        handleWalletConnect,
        handleWalletDisconnect,
        hasMetaMask,
        scanner,
        setScanner,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(userContext);

  if (!context)
    throw new Error("useWallet must be used inside a `UserProvider`");

  return context;
}
