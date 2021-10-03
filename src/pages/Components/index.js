import React from "react";
import Input from "./../../components/Input/index";
import {
  DrugsSvg,
  FullLogoIcon,
  HalfLogoIcon,
  MicroChipSvg,
} from "../../assets/";
import ActionBox from "../../components/ActionBox";
function Components(props) {
  return (
    <>
      <div className="p-4">
        <p className="mb-4">This is an Input box</p>
        <Input type="text" placeHolder="Drug name" />
      </div>
      <div className="p-4 flex flex-wrap gap-7 ">
        <div>
          <p className="mb-4">This is the Full Logo</p>
          <FullLogoIcon />
        </div>
        <div>
          <p className="mb-4">This is the Half Logo</p>
          <HalfLogoIcon />
        </div>
      </div>

      <div className="p-4">
        <p className="mb-4">These are the Action Boxes</p>
        <div className="flex flex-wrap flex-1 gap-7">
          <ActionBox title="Generate Hash" image={MicroChipSvg} />
          <ActionBox title="Drug Inventory" image={DrugsSvg} />
        </div>
      </div>
    </>
  );
}

export default Components;
