import { createContext, useContext, useState, useEffect } from "react";

const userContext = createContext();

export function WalletProvider({ children }) {
  const [userWalletAddress, setUserWalletAddress] = useState(null);
  const [userType, setUserType] = useState(null)
  

  return (
    <userContext.Provider value={{ userWalletAddress, setUserWalletAddress, userType, setUserType }}>
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
