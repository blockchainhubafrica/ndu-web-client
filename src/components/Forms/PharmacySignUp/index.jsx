import React from "react";
import { Input, RegularButton } from "../../../components";
import styles from "./pharmacy-signup.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  nduTokenContractAddress,
  registerPharmacyContractAddress,
} from "../../../utils";
import { ethers } from "ethers";
import registerAbi from "../../../contract/abis/Register.json";
import nduTokenAbi from "../../../contract/abis/nduToken.json";
import { v4 as uuidv4 } from "uuid";
import sha256 from "sha256";

const getId = () => {
  let range = Array.from(Array(10).keys());
  let token = "";
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * range.length);
    token += range[randomIndex];
  }
  return token;
};

const description = (name, address) => {
  return `The name of the pharmacy is ${name} and it is located in ${address}`;
};

function PharmacySignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      pin: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Pharmacy Name is too short")
        .required("Pharmacy Name is required"),
      address: Yup.string()
        .min(3, "This Address is too short")
        .required("Your Address is required"),
      pin: Yup.string()
        .min(5, "Must be up to 5 characters")
        .required("Your Pharmacy Identitification number is required"),
    }),
    onSubmit: (values) => {
      const check = async () => {
        const { ethereum } = window;

        try {
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const registerContract = new ethers.Contract(
              registerPharmacyContractAddress,
              registerAbi.abi,
              signer
            );

            const nduTokenContract = await new ethers.Contract(
              nduTokenContractAddress,
              nduTokenAbi.abi,
              signer
            );

            const approval = await nduTokenContract.approve(
              registerContract.address,
              "100"
            );

            console.log(approval);

            const name = values.name;
            const id = getId();
            const isonumber = uuidv4();
            const companyIPFSHash = sha256(
              description(values.name, values.address).toString()
            );

            const registeredPharmacy = await registerContract.registerCompany(
              id,
              name,
              isonumber,
              companyIPFSHash
            );

            console.log(registerContract);

            console.log("Pharmacy Details:", {
              name,
              id,
              isonumber,
              companyIPFSHash,
            });

            console.log({ registeredPharmacy });

            await registerContract.on(
              "companyRegister",
              (sender, pharmcyName, iso, pharamcyHash) => {
                console.log(
                  { sender, pharmcyName, iso, pharamcyHash },
                  "WasRegistered Successfully"
                );
              }
            );
          } else {
            return "Not logged in";
          }
        } catch (error) {
          console.log(error);
        }
      };
      check();

      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={`${styles["container"]}`} onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        formik={formik}
        label="Pharmacy Name"
        className={`${styles["inputs"]} mb-8`}
      />
      <Input
        name="address"
        formik={formik}
        label="Address / Location"
        className={`${styles["inputs"]} mb-8`}
      />
      <Input
        name="pin"
        formik={formik}
        type="password"
        label="Pharmacy Identification Number"
        className={`${styles["inputs"]} mb-10`}
      />
      <RegularButton>Submit</RegularButton>
    </form>
  );
}

export default PharmacySignUpForm;
