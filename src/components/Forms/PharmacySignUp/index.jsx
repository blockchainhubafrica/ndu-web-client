import React from "react";
import { Input, RegularButton } from "../../../components";
import styles from "./pharmacy-signup.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { registerPharmacy } from "../../../services/web3Services";
import sha256 from "sha256";
import { randomNumber } from "../../../utils";
import { useLoadingContext } from "../../../contexts/loadingContext";
import { useToastContext } from "../../../contexts/toastContext";

const description = (name, address) => {
  return `The name of the pharmacy is ${name} and it is located in ${address}`;
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Pharmacy Name is too short")
    .required("Pharmacy Name is required"),
  address: Yup.string()
    .min(3, "This Address is too short")
    .required("Your Address is required"),
  pin: Yup.string()
    .min(5, "Must be up to 5 characters")
    .required("Your Pharmacy Identitification number is required"),
});

const initialValues = {
  name: "",
  address: "",
  pin: "",
};

function PharmacySignUpForm() {
  const { setIsLoading } = useLoadingContext();
  const { toast } = useToastContext();
  const history = useHistory();
  const handleSubmit = (values) => {
    const details = {
      id: randomNumber(),
      name: values.name,
      isoNumber: uuidv4(),
      ipfsHash: sha256(description(values.name, values.address).toString()),
    };
    (async () => {
      await registerPharmacy(details, setIsLoading, () => {
        toast.success(`${values.name} was successfully registered`);
        history.push("/dashboard/pharmacy");
      });
    })();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
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
