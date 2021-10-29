import { useEffect, useState } from "react";

const largeCutText = (text) =>
  `${text.substring(0, 3)}...${text.substring(text.length - 4)}`;

const smallCutText = (text) =>
  `${text.substring(0, 2)}...${text.substring(text.length - 2)}`;

function useShortenAddress(address) {
  const [shortForm, setShortForm] = useState("*****");

  useEffect(() => {
    if (window.innerWidth >= 768) setShortForm(largeCutText(address));
    if (window.innerWidth < 768) setShortForm(smallCutText(address));
  }, [address]);

  return shortForm;
}

export { useShortenAddress };
