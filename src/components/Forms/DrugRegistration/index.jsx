import React, {useState, useEffect} from "react";
import styles from "./drug-registration.module.css";
import { UploadDrugImage } from "../../../assets";
import { Input, TextArea } from "../../../components";
import { createJsonFile } from './../../../utils/files';
import ipfs from "../../../utils/ipfs";

const DrugRegistration = (props) => {
  // state variables
  const [drugName, setDrugName] = useState("")
  const [ drugExpiry, setDrugExpiry ] =  useState("")
  const [drugManufactureDate, setDrugManufactureDate] = useState("")
  const [drugDescription, setDrugDescription] = useState("")
  const [ipfsHash, setIpfsHash ] = useState("empty")

  const onSubmit = async () => {
    try{
      console.log('name', drugName)
      console.log('Expiry', drugExpiry)
      console.log('Manufacture Date', drugManufactureDate)
      console.log('Description', drugDescription)

      const result = await ipfs.addJSON({ 
        DrugName: drugName, 
        DrugExpiry: drugExpiry, 
        DrugManufactureDate: drugManufactureDate,
        DrugDescription: drugDescription
      });

      setIpfsHash(result)
      console.log("ipfshash", ipfsHash)


    } catch(err) {
      console.log(err)
    }

    
  }

  // useEffect(() => {
  //   onSubmit()
    
  // }, [ipfsHash])





  // const a = { name: "chidie", dept: "geo" };
  // createJsonFile(a)
  return (
    <form>
      <div>
        <h3 className="font-medium mb-4">Generate hash</h3>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="lg:col-span-2 xl:col-span-1">
            <div
              className={`${styles["upload-image"]} flex items-center justify-center mb-6 md:mb-0`}
            >
              <UploadDrugImage />
              <input type="file"></input>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 mb-6 ">
            <div className="mb-5">
              <Input placeholder="Drug name" type="text" className="w-full" onChange={(e) => setDrugName(e.target.value)} />
            </div>
            <div className="mb-5">
              <Input placeholder="Manufactury date" className="w-full" onChange={(e) => setDrugManufactureDate(e.target.value)} />
            </div>
            <div>
              <Input placeholder="Expiry date" className="w-full" onChange={(e) => setDrugExpiry(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <TextArea
          className="w-full"
          rows="4"
          placeholder="Brief drug description"
          onChange={(e) => setDrugDescription(e.target.value)}
          
        />
      </div>
      <div className="flex flex-wrap justify-between items-center my-6">
        <div className="w-full md:w-auto mb-8 md:mb-0 lg:mb-8 xl:mb-0">
          <Input
            placeholder="No. of Hash keys"
            type="number"
            className="w-full md:w-auto"
          />
        </div>
        <button className="px-5 py-3 md:px-10 md:py-4 ml-auto md:mt-0 md:ml-0" onClick={onSubmit}>
          Generate
        </button>
        <br></br>
        <h4>Ipfs Hash: {ipfsHash}</h4>
        <a href={`https://ipfs.io/ipfs/${ipfsHash}`}>Click to view ipfs details</a>
      </div>
    </form>
  );
}

export default DrugRegistration;
