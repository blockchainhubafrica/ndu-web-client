import React, { useEffect, useState } from "react";

function useShortenAddress(address) {
  const [shortAddress, setShortAddress] = useState("******");

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShortAddress(
        `${
          address.substring(0, 3) +
          "..." +
          address.substring(address.length - 4)
        }`
      );
    } else {
      setShortAddress(
        `${
          address.substring(0, 2) +
          "..." +
          address.substring(address.length - 2)
        }`
      );
    }
  }, []);

  return { shortAddress };
}

export { useShortenAddress };
