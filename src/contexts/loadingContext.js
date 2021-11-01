import { createContext, useContext, useState } from "react";

const loadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <loadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </loadingContext.Provider>
  );
}

export function useLoadingContext() {
  const context = useContext(loadingContext);

  if (!context)
    throw new Error("useLoading must be used inside a `LoadingProvider`");

  return context;
}
