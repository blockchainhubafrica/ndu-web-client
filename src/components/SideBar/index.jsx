import React from "react";
import styles from "./sideBar.module.css";
import { CartIcon, DashBoardIcon, MoneyIcon, NduLogo, UserIcon} from "../../assets"

function SideBar() {
  return (
    <div className={`${styles.sideBarCon}`}>
      <NduLogo className={`${styles.nduLogo}`} />
      <ul>
        <li>
          <span className={`${styles.iconCon}`}>
            <DashBoardIcon className={`${styles.sideBarIcon}`} />
          </span>
          <h6>Dashboard</h6>
        </li>
        <li>
          <span className={`${styles.iconCon}`}>
            <UserIcon className={`${styles.sideBarIcon}`} />
          </span>
          <h6>Profile</h6>
        </li>
        <li>
          <span className={`${styles.iconCon}`}>
            <MoneyIcon className={`${styles.sideBarIcon}`} />
          </span>
          <h6>Transactions</h6>
        </li>
        <li>
        <span className={`${styles.iconCon}`}>
            <CartIcon className={`${styles.sideBarIcon}`} />
          </span>
          <h6>Pharmacy</h6>
        </li>
      </ul>
    </div>
  );
}

export  {SideBar};
