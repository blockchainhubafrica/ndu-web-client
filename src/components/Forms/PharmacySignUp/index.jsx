import React from "react";
import { Input, RegularButton } from "../../../components";
import styles from "./pharmacy-signup.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

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
      alert(JSON.stringify(values, null, 2));
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
