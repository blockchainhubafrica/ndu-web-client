import React, { useEffect, useState } from "react";
import {
  DrugsSvg,
  FullLogoIcon,
  HalfLogoIcon,
  MicroChipSvg,
  HowItWorksIconA,
  HowItWorksIconB,
  HowItWorksIconC,
  HowItWorksIconD,
  SheildIcon,
  WarningIcon,
  TboltIcon,
} from "../../assets/";

import {
  Header,
  ActionBox,
  Input,
  Footer,
  HowItWorksCard,
  HistoryCard,
  Modal,
} from "./../../components";

function Components(props) {
  const [displayModal, setdisplayModal] = useState(true);

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

        {/* How it works cards */}
        <div className="py-8">
          <p className="mb-4">These are the How It Works Cards</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="my-3">
              <HowItWorksCard
                Icon={HowItWorksIconA}
                text={"Inscribe and ID a product with unique hash values."}
              />
            </div>
            <div className="my-3">
              <HowItWorksCard
                Icon={HowItWorksIconB}
                text={"Store hash values in blockchain."}
              />
            </div>
            <div className="my-3">
              <HowItWorksCard
                Icon={HowItWorksIconC}
                text={"Generate barcode with hash values."}
              />
            </div>
            <div className="my-3">
              <HowItWorksCard
                Icon={HowItWorksIconD}
                text={"Now you can verify product anywhere."}
              />
            </div>
          </div>
        </div>

        {/* History cards */}
        <div className="py-4">
          <p className="mb-4">These are the History Cards</p>
          <div className="">
            <div className="my-3">
              <HistoryCard
                Icon={SheildIcon}
                headText={"Tetracycline capsule"}
                subText={"Rema Pharmacy"}
                date={"7 Jun, 21"}
                type={"Original"}
              />
            </div>
            <div className="my-3">
              <HistoryCard
                Icon={WarningIcon}
                headText={"Tetracycline capsule"}
                subText={"Rema Pharmacy"}
                date={"7 Jun, 21"}
                type={"Counterfiet"}
              />
            </div>
            <div className="my-3">
              <HistoryCard
                Icon={TboltIcon}
                headText={"Tetracycline capsule"}
                subText={"Rema Pharmacy"}
                date={"7 Jun, 21"}
                type={"Expired"}
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal
          type="Original"
          displayModal={displayModal}
          closeModal={() => setdisplayModal(false)}
        >
          <div>
            <h1 className="text-center">Modal items go into here</h1>
            <h2 style={{ fontSize: "50px" }} className="text-center mt-5">
              😎
            </h2>
          </div>
        </Modal>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export { Components };
