import React from "react";
import {
  DrugsSvg,
  FullLogoIcon,
  HalfLogoIcon,
  MicroChipSvg,
} from "../../assets/";
import { InputWithButton } from "../../components/InputWithButton";
import {
  Header,
  SideBar,
  ActionBox,
  Input,
  RightBar,
  MainButton,
  CameraDisplay,
} from "./../../components";

function Components(props) {
  return (
    <>
      <Header />
      <main className="container" style={{ display: "flex", padding: "0px" }}>
        <SideBar />
        <div className="centerCon">
          <p className="py-2">This is the Header</p>
          <div className="py-6 flex flex-row justify-between align-center">
            <div>
            <p className="mb-4 text-center">This is an Input box</p>
            <Input type="text" placeHolder="Drug name" className="mb-6" />
            </div>
            <div>
            <p className="mb-4 text-center">This the main button</p>
            <MainButton buttonText="Scan barcode" />
            </div>
          </div>
          <div className="mb-10">
            <p className="mb-4 text-center">This is an Input box with button</p>
            <InputWithButton  />
          </div>
          
          <div className="py-4 flex flex-wrap gap-7 ">
            <div>
              <p className="mb-4">This is the Full Logo</p>
              <FullLogoIcon />
            </div>
            <div>
              <p className="mb-4">This is the Half Logo</p>
              <HalfLogoIcon />
            </div>
          </div>

          <div className="py-4">
            <p className="mb-4">These are the Action Boxes</p>
            <div className="flex flex-wrap flex-1 gap-7">
              <div className="my-3">
                <ActionBox title="Generate Hash" image={MicroChipSvg} />
              </div>
              <div className="my-3">
                <ActionBox title="Drug Inventory" image={DrugsSvg} />
              </div>
            </div>
          </div>

          <CameraDisplay />
        </div>
        <RightBar />
      </main>
    </>
  );
}

export default Components;
