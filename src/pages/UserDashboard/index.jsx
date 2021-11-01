import React from "react";
import styles from "./userDashboard.module.css";
import {
  ArrowDown,
  handWithDrug,
  SheildIcon,
  TboltIcon,
  WarningIcon,
} from "../../assets";
import { HistoryCard, MainButton } from "../../components";
import { DashboardLayout } from "../../layouts";
import ScanButton from "../../components/ScanIcon";

function UserDashboard() {
  return (
    <DashboardLayout bg="#022655" fill="#fff">
      <div className={`${styles.userDashboardCon} container pb-10`}>
        <h1 className={`${styles.greeting} mt-6`}>
          Hi<span className={`${styles.welcome}`}>, Welcome</span>
        </h1>
        <div
          className={`${styles.dashBoardCarousel} pl-5 xl:pl-10 mt-10 py-6 flex items-center justify-beween`}
        >
          <div className="">
            <h1 className="mb-2">Carry out check on a drug</h1>
            <h6 className="mb-10">
              Click on the barcode icon to verify the originality of your drug.
            </h6>
            <MainButton
              onClick={() => alert("Scanning...")}
              bg="#00D6A3"
              buttonText="Scan barcode"
            />
          </div>
          <img src={handWithDrug} alt="" />
        </div>
        <div
          className={`${styles.arrowDown} mx-auto self-center flex items-center justify-center mt-10`}
        >
          <ArrowDown />
        </div>
        <div className="w-6/6 flex items-center justify-between mt-10 mb-7">
          <h1 className={`${styles.activityHistory}`}>Activity history</h1>
        </div>
        <HistoryCard
          Icon={SheildIcon}
          headText={"Tetracycline capsule"}
          subText={"Rema Pharmacy"}
          date={"7 Jun, 21"}
          type={"Original"}
        />
        <HistoryCard
          Icon={WarningIcon}
          headText={"Tetracycline capsule"}
          subText={"Rema Pharmacy"}
          date={"7 Jun, 21"}
          type={"Counterfiet"}
        />
        <HistoryCard
          Icon={TboltIcon}
          headText={"Tetracycline capsule"}
          subText={"Rema Pharmacy"}
          date={"7 Jun, 21"}
          type={"Expired"}
        />
        <HistoryCard
          Icon={SheildIcon}
          headText={"Tetracycline capsule"}
          subText={"Rema Pharmacy"}
          date={"7 Jun, 21"}
          type={"Original"}
        />
        <HistoryCard
          Icon={WarningIcon}
          headText={"Tetracycline capsule"}
          subText={"Rema Pharmacy"}
          date={"7 Jun, 21"}
          type={"Counterfiet"}
        />
        <HistoryCard
          Icon={TboltIcon}
          headText={"Tetracycline capsule"}
          subText={"Rema Pharmacy"}
          date={"7 Jun, 21"}
          type={"Expired"}
        />
      </div>
      <ScanButton />
    </DashboardLayout>
  );
}

export { UserDashboard };
