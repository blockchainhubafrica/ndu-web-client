import { ethers } from "ethers";
import { NduAbi } from "../contract/abis";
import { nduBaseContractAddress } from "./constants";

export const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export const randomNumber = (length) => {
  length ?? (length = 10);
  let range = Array.from(Array(length).keys());
  let token = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * range.length);
    token += range[randomIndex];
  }
  return token;
};

export const arrayOfrandomNumbers = (amount, numberLength) => {
  numberLength ?? (numberLength = 10);

  const serialsArray = [];
  for (let i = 0; i < amount; i++) {
    serialsArray.push(randomNumber(numberLength));
  }
  return serialsArray;
};

export const scanDrug = async (drug) => {
  console.log("scanned drug", drug);
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        nduBaseContractAddress,
        NduAbi.abi,
        signer
      );

      const scannedDrug = await contract.scanProduct(drug, {
        gasLimit: 1000000,
      });

      await contract.on("Scanned", (drug, serial) => {
        console.log("Scanned", drug, serial);
      });

      console.log(scannedDrug);
    }
  } catch (error) {
    console.log(error);
  }
};
