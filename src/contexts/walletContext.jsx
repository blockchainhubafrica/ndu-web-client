import { createContext, useContext, useState, useEffect } from "react";

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);
  

  return (
    <WalletContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWalletContext() {
  const context = useContext(WalletContext);

  if (!context)
    throw new Error("useWallet must be used inside a `WalletProvider`");

  return context;
}
