import React from 'react'
import styles from "./userDashboard.module.css"
import {
  ArrowDown,
  handWithDrug,
  SheildIcon,
  SquareBarCode,
  TboltIcon,
  WarningIcon,
} from "../../assets";
import { HistoryCard, MainButton } from "../../components";
import { DashboardLayout } from "../../layouts";

function UserDashboard() {
  return (
    <DashboardLayout>
      <div className="w-5/6 flex flex-col">
        <h1 className={`${styles.greeting} mt-10`}>
          Hi<span className={`${styles.welcome}`}>, Welcome</span>
        </h1>
        <div
          className={`${styles.dashBoardCarousel} pl-10 w-6/6 mt-10 flex items-center justify-beween`}
        >
          <div className="w-3/6 h-4/6 flex flex-col justify-between">
            <h1>Carry out check on a drug</h1>
            <h6 className="mb-5">
              Clic on the barcode icon to verify the originality of your drug.
            </h6>
            <MainButton bg="#00D6A3" buttonText="Scan barcode" />
          </div>
          <img src={handWithDrug} alt="" />
        </div>
        <div
          className={`${styles.arrowDown} self-center flex items-center justify-center mt-10`}
        >
          <ArrowDown />
        </div>
        <div className="w-6/6 flex items-center justify-between mt-10 mb-10">
          <h1 className={`${styles.activityHistory}`}>Activity history</h1>
          <div
            className={`${styles.activityScanIndicator} flex justify-center items-center`}
          >
            <SquareBarCode />
          </div>
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
      </div>
    </DashboardLayout>
  );
}

export  {UserDashboard}
