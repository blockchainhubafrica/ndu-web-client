import React from "react";
import styles from "./sideBar.module.css";
import { CartIcon, DashBoardIcon, MoneyIcon, NduLogo, UserIcon} from "../../assets"
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className={`${styles.sideBarCon} hidden lg:block`}>
      <NduLogo className={`${styles.nduLogo} mt-10`} />
      <ul>
       <Link to="/dashboard/user">
       <li>
          <span className={`${styles.iconCon}`}>
            <DashBoardIcon className={`${styles.sideBarIcon}`} />
          </span>
          <h6>Dashboard</h6>
        </li>
       </Link>
        <Link to="/">
        <li>
          <span className={`${styles.iconCon}`}>
            <UserIcon className={`${styles.sideBarIcon}`} />
          </span>
          <h6>Profile</h6>
        </li>
        </Link>
       <Link to="/">
       <li>
          <span className={`${styles.iconCon}`}>
            <MoneyIcon className={`${styles.sideBarIcon}`} />
          </span>
          <h6>Transactions</h6>
        </li>
       </Link>
        <Link to="/dashboard/pharmacy/login">
        <li>
        <span className={`${styles.iconCon}`}>
            <CartIcon className={`${styles.sideBarIcon}`} />
          </span>
          <h6>Pharmacy</h6>
        </li>
        </Link>
      </ul>
    </div>
  );
}

export  {SideBar};
