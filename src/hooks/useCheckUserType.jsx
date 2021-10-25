import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/userContext";
import { abi } from "../contract/abis/Register.json";
import { registerPharmacyContractAddress } from "../utils";
import { ethers } from "ethers";

const useCheckUserType = () => {
  const { user, setUser } = useUserContext();
  const [hasPharmacy, setHasPharmacy] = useState(false);
  useEffect(() => {
    if (!hasPharmacy) return;
    const userState = { ...user };
    userState.hasPharmacy = hasPharmacy;
    setUser(userState);
  }, [hasPharmacy]);

  // const check = async () => {
  //   const { ethereum } = window;

  //   try {
  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const contract = new ethers.Contract(
  //         registerPharmacyContractAddress,
  //         abi,
  //         signer
  //       );
  //       console.log(contract);
  //       const hasRegisteredPharmacy = await contract.registered(user.address);
  //       console.log({ hasRegisteredPharmacy });
  //       return setHasPharmacy(hasRegisteredPharmacy);
  //     } else {
  //       return "Not logged in";
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // check();
};

export default useCheckUserType;

// import { useWalletContext } from "../contexts/walletContext";
// import jsonInterface from "../contract/abis/Register.json"
// import { registerPharmacyContractAddress } from "../utils";
// import {Web3} from 'web3';

// const CheckUserType = async () =>{

//     const {userWalletAddress} = useWalletContext();

//     var Contract = require('web3-eth-contract');

//     Contract.setProvider('ws://localhost:8546');

//     // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

//     const contract = new Contract(jsonInterface, registerPharmacyContractAddress);

//     const result = await contract.methods.registered(userWalletAddress).call();

//     return result;
// }

// export default CheckUserType;
