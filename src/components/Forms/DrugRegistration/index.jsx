import React, { useState } from "react";
import styles from "./drug-registration.module.css";
import { UploadDrugImage } from "../../../assets";
import { Input, TextArea, NormalButton } from "../../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ipfsApi, ipfsMini } from "../../../services/ipfs";
import { ethers } from "ethers";
import { getRegisterContract } from "../../../services/web3Services";
import { arrayOfrandomNumbers, randomNumber } from "../../../utils";
import { useToastContext } from "../../../contexts/toastContext";
import { useLoadingContext } from "../../../contexts/loadingContext";
import { useUserContext } from "../../../contexts/userContext";

const validationSchema = Yup.object({
  file: Yup.mixed().required("Please include an image"),
  name: Yup.string()
    .min(2, "Drug Name Name is too short")
    .required("Drug Name is required"),
  "manufacture-date": Yup.string().required("Manufacture Date is required"),
  "expiry-date": Yup.string().required("Manufacture Date is required"),
  "no-of-serials": Yup.string().required(
    "Input the no. of serials to generate"
  ),
  description: Yup.string()
    .min(5, "Description is too short")
    .required("Brief description is required"),
});

const initialValues = {
  file: null,
  name: "",
  "manufacture-date": "",
  "expiry-date": "",
  "no-of-serials": "",
  description: "",
};

function DrugRegistration(props) {
  const { toast } = useToastContext();
  const { setIsLoading } = useLoadingContext();
  const [image, setImage] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    console.log({ values });
    let serialCount = values["no-of-serials"];
    const serialsArray = arrayOfrandomNumbers(serialCount);
    console.log(serialsArray);
    const fileReader = new FileReader();
    setIsLoading(true);
    try {
      fileReader.readAsArrayBuffer(values.file);
      fileReader.onloadend = () => {
        let buffer = Buffer(fileReader.result);

        ipfsApi.files?.add(buffer, async (error, result) => {
          if (error) {
            console.log(error);
            return;
          }
          console.log(result[0].hash);
          const drugIpfsHash = await ipfsMini.addJSON({
            imageHash: result[0].hash,
            name: values.name,
            "manufacture-date": values["manufacture-date"],
            "expiry-date": values["expiry-date"],
            "no-of-serials": values["no-of-serials"],
            description: values.description,
          });
          console.log({ drugIpfsHash });
          // (async () => {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const registrationContract = await getRegisterContract(signer);
          console.log(registrationContract);

          await registrationContract.registerSerialNumber(
            serialsArray,
            drugIpfsHash
          );

          await registrationContract.on("drugRegister", () => {
            // onRegistered();
            // console.log("Drug was registered")
            setIsLoading(false);

            toast.success(`${values.name} was registered successfully!`);
            resetForm();
            setImage(null);
            // Loading(false);
          });
        });
      };

      // })()
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
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
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setImage(url);
                  }
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
              name="manufacture-date"
              formik={formik}
              placeholder="Manufacture Date"
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
            name="no-of-serials"
            placeholder="No. of Serial keys"
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
