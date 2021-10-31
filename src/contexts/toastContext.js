import { createContext, useContext, useState } from "react";

const toastContext = createContext();

export function ToastProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [toastMessage, setToastMessage] = useState("Hello");

  const toast = {
    error: (message) => {
      setIsActive(true);
      setToastType("error");
      setToastMessage(message);
    },
    success: (message) => {
      setIsActive(true);
      setToastType("success");
      setToastMessage(message);
    },
  };

  return (
    <toastContext.Provider
      value={{
        toast,
        toastType,
        setToastType,
        toastMessage,
        setToastMessage,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </toastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(toastContext);

  if (!context)
    throw new Error("useToast must be used inside a `ToastProvider`");

  return context;
}
