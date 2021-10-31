import React, { useState } from "react";
import styles from "./drug-registration.module.css";
import { UploadDrugImage } from "../../../assets";
import { Input, TextArea, NormalButton } from "../../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import ipfs from "../../../utils/ipfs";

const validationSchema = Yup.object({
  file: Yup.mixed().required("Please include an image"),
  name: Yup.string()
    .min(2, "Drug Name Name is too short")
    .required("Drug Name is required"),
  "manufactury-date": Yup.string().required("Manufactury Date is required"),
  "expiry-date": Yup.string().required("Manufactury Date is required"),
  "hash-number": Yup.string().required(
    "Must input the no. of drugs to register"
  ),
  description: Yup.string()
    .min(5, "Description is too short")
    .required("Brief description is required"),
});

const initialValues = {
  file: null,
  name: "",
  "manufactury-date": "",
  "expiry-date": "",
  "hash-number": "",
  description: "",
};

function DrugRegistration(props) {
  const [image, setImage] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
    
    // (async () => {
    //   const result = await ipfs.addJSON({...values});

    // })()
    // const details = {
    //   id: randomNumber(),
    //   name: values.name,
    //   isoNumber: uuidv4(),
    //   ipfsHash: sha256(description(values.name, values.address).toString()),
    // };
    (async () => {
      // await registerPharmacy(details, setIsLoading, () => {
      //   toast.success(`${values.name} was successfully registered`);
      //   history.push("/dashboard/pharmacy");
      // });
    })();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <form className={`${styles["container"]}`} onSubmit={formik.handleSubmit}>
      <div>
        <h3 className="font-medium mb-4">Generate hash</h3>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="lg:col-span-3 xl:col-span-1 mb-6 md:mb-0">
            <label
              htmlFor="file"
              className={`${styles["upload-image"]} flex items-center justify-center mb-6 md:mb-0 cursor-pointer`}
            >
              {!image && <UploadDrugImage />}
              {image && <img src={image} alt="" />}
              <Input
                id="file"
                className="hidden"
                name="file"
                type="file"
                onChange={(event) => {
                  const file = event?.currentTarget?.files[0];
                  formik.setFieldValue("file", file);
                  const url = URL.createObjectURL(file);
                  setImage(url);
                }}
              ></Input>
              {!image && (
                <div className={`${styles["error-message"]}`}>
                  Please upload an image
                </div>
              )}
            </label>
          </div>
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 ">
            <Input
              name="name"
              formik={formik}
              className={`w-full mb-8`}
              placeholder="Drug Name"
            />
            <Input
              isdate="true"
              name="manufactury-date"
              formik={formik}
              placeholder="Manufactury Date"
              className={`w-full mb-8`}
            />
            <Input
              isdate="true"
              name="expiry-date"
              formik={formik}
              placeholder="Expiry Date"
              className={`w-full`}
            />
          </div>
        </div>
      </div>
      <div className="my-6">
        <TextArea
          formik={formik}
          name="description"
          className="w-full"
          rows="4"
          placeholder="Brief drug description"
        />
      </div>
      <div className="flex flex-wrap justify-between items-center my-6">
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <Input
            formik={formik}
            name="hash-number"
            placeholder="No. of Hash keys"
            type="number"
            className="w-full md:w-auto"
          />
        </div>
        <NormalButton type="submit" className={`${styles["submit-btn"]}`}>
          Generate
        </NormalButton>
      </div>
    </form>
  );
}

export default DrugRegistration;
