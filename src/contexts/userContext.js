import { createContext, useContext, useState, useEffect } from "react";

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

  const handleWalletConnect = async () => {
    const connectionStatus = await connectToMetaMask();
    if (connectionStatus.error) return false;

    const address = await getActiveWallet();
    setAddress(address);

    setIsConnected(true);

    return true;
  };

  const handleWalletDisconnect = () => {
    setIsConnected(false);
  };

  const setAddress = (address) => {
    let updatedUser = { ...user };
    updatedUser.address = address;
    setUser(updatedUser);
    setIsConnected(true);
  };

  const handleAccountChanged = (address) => {
    if (address) return handleWalletDisconnect();
    setAddress(address);
  };

  useEffect(() => {
    if (!isConnected)
      setTimeout(() => {
        history.replace("/");
      }, 300);
  }, [isConnected, history]);

  useEffect(() => {
    if (!hasEthereum()) return;
    listenToAccountChanges(handleAccountChanged);

    return unmountEthListeners();
  });

  useEffect(() => {
    if (!hasEthereum()) return setHasMetaMask(false);
  }, [isInitiallyFetched]);

  // useEffect(() => {
  //   if (isInitiallyFetched && address)
  //     localStorage.setItem("wallet-status", address);
  // }, [address, isInitiallyFetched]);

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
