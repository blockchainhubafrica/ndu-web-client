import { createContext, useContext, useState, useEffect } from "react";
import { abi } from "../contract/abis/Register.json";
import { checkForPharmacyContractAddress } from "../utils";
import { ethers } from "ethers";

const userContext = createContext();

export function WalletProvider({ children }) {
  const [user, setUser] = useState({ address: null, hasPharmacy: false });

  useEffect(() => {
    if (!user.address) return;
    const check = async () => {
      const { ethereum } = window;

      try {
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            checkForPharmacyContractAddress,
            abi,
            signer
          );
          console.log(contract);
          const hasRegisteredPharmacy = await contract.registered(user.address);
          console.log({ hasRegisteredPharmacy });
        } else {
          return "Not logged in";
        }
      } catch (error) {
        console.log(error);
      }
    };
    check();
  }, [user.address]);

  return (
    <userContext.Provider value={{ user, setUser }}>
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
