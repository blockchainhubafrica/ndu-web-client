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

