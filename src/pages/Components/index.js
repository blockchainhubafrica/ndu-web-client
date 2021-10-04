import React from "react";
import {
  DrugsSvg,
  FullLogoIcon,
  HalfLogoIcon,
  MicroChipSvg,
} from "../../assets/";
import { Header, ActionBox, Input } from "./../../components";
function Components(props) {
  return (
    <>
      <Header />
      <main className="container">
        <p className="py-4">This is the Header</p>
        <div className="py-4">
          <p className="mb-4">This is an Input box</p>
          <Input type="text" placeHolder="Drug name" />
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
      </main>
    </>
  );
}

export default Components;
