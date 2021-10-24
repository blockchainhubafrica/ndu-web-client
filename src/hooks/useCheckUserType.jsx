import { useUserContext } from "../contexts/userContext";
import abi from "../contract/abis/Register.json";
import { registerContractAddress } from "../utils";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

const useCheckUserType = () => {
  const { userWalletAddress, setUserType } = useUserContext();

  console.log(userWalletAddress);

  const check = async () => {
    const { ethereum } = window;

    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          registerContractAddress,
          abi.abi,
          signer
        );
        console.log(contract);
        const userType = await contract.registered(userWalletAddress);
        if (userType === true) {
          setUserType("pharm");
        } else {
          setUserType("user");
        }
        console.log(userType, "loooooooooggggggg!!!");
      } else {
        return "Not logged in";
      }
    } catch (error) {
      console.log(error);
    }
  };
  check();
};

export default useCheckUserType;

// import { useWalletContext } from "../contexts/walletContext";
// import jsonInterface from "../contract/abis/Register.json"
// import { registerContractAddress } from "../utils";
// import {Web3} from 'web3';

// const CheckUserType = async () =>{

//     const {userWalletAddress} = useWalletContext();

//     var Contract = require('web3-eth-contract');

//     Contract.setProvider('ws://localhost:8546');

//     // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

//     const contract = new Contract(jsonInterface, registerContractAddress);

//     const result = await contract.methods.registered(userWalletAddress).call();

//     return result;
// }

// export default CheckUserType;
