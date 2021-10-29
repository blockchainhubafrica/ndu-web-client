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
} from "../services/web3Services";

import { useHistory } from "react-router-dom";

const userContext = createContext();

export function WalletProvider({ children }) {
  const history = useHistory();
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetaMask, setHasMetaMask] = useState(true);

  const [user, setUser] = useState({ address: null, activePharmacy: null });

  const setAddress = useCallback(
    (address) => {
      return (async () => {
        let updatedUser = { ...user };
        updatedUser.address = address;
        setUser(updatedUser);
        setIsConnected(true);
      })();
    },
    [user]
  );

  const handleWalletConnect = useCallback(() => {
    (async () => {
      const connectionStatus = await connectToMetaMask();
      if (connectionStatus.error) return false;

      const address = getActiveWallet();
      setAddress(address);

      setIsConnected(true);

      localStorage.setItem("wallet-connection", true);

      setTimeout(() => {
        history.replace("/dashboard/user");
      }, 300);

      return true;
    })();
  }, [setAddress, history]);

  const handleWalletDisconnect = () => {
    setIsConnected(false);
    localStorage.removeItem("wallet-connection");
    setTimeout(() => {
      history.replace("/");
    }, 300);
  };

  const handleAccountChanged = (address) => {
    if (!address) return handleWalletDisconnect();
    setAddress(address);
  };

  useEffect(() => {
    if (!isInitiallyFetched) return;

    if (!hasEthereum()) return;
    listenToAccountChanges(handleAccountChanged);

    return unmountEthListeners();
  });

  useEffect(() => {
    if (isInitiallyFetched) return;
    if (!hasEthereum()) return setHasMetaMask(false);
    const isInjected = localStorage.getItem("wallet-connection");
    if (!isInjected) return setIsInitiallyFetched(true);

    handleWalletConnect();
    setIsInitiallyFetched(true);
  }, [handleWalletConnect, isInitiallyFetched]);

  // useEffect(() => {
  //   if (!user.address) return;
  //   const check = async () => {
  //     const { ethereum } = window;

  //     try {
  //       if (ethereum) {
  //         const provider = new ethers.providers.Web3Provider(ethereum);
  //         const signer = provider.getSigner();
  //         const contract = new ethers.Contract(
  //           registerPharmacyContractAddress,
  //           abi,
  //           signer
  //         );
  //         console.log(contract);
  //         const hasRegisteredPharmacy = await contract.registered(user.address);
  //         console.log({ hasRegisteredPharmacy });
  //       } else {
  //         return "Not logged in";
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   check();
  // }, [user.address]);

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
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(userContext);

  if (!context)
    throw new Error("useWallet must be used inside a `WalletProvider`");

  return context;
}
