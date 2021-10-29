import { useEffect, useState } from "react";

function useShortenAddress(address) {
  const [shortForm, setShortForm] = useState("*****");

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setShortForm(
        `${address.substring(0, 3)}...${address.substring(address.length - 4)}`
      );
    }

    setShortForm(
      `${address.substring(0, 2)}...${address.substring(address.length - 2)}`
    );
  }, [address]);

  return shortForm;
}

export { useShortenAddress };
