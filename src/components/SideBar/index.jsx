import React from "react";
import styles from "./sideBar.module.css";
import {
  CartIcon,
  DashBoardIcon,
  MoneyIcon,
  NduLogo,
  UserIcon,
} from "../../assets";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

function SideBar() {
  const { user } = useUserContext();
  const hasPharmacy = user.pharmacyDetails;

  return (
    <div className={`${styles.sideBarCon} py-10 hidden lg:block`}>
      <NduLogo className={`${styles.nduLogo}`} />
      <ul>
        <NavLink to="/dashboard/user">
          <li>
            <span className={`${styles.iconCon}`}>
              <DashBoardIcon className={`${styles.sideBarIcon}`} />
            </span>
            <h6>Dashboard</h6>
          </li>
        </NavLink>
        <NavLink to="/dashboard/user">
          <li>
            <span className={`${styles.iconCon}`}>
              <UserIcon className={`${styles.sideBarIcon}`} />
            </span>
            <h6>Profile</h6>
          </li>
        </NavLink>
        <NavLink to="/dashboard/user">
          <li>
            <span className={`${styles.iconCon}`}>
              <MoneyIcon className={`${styles.sideBarIcon}`} />
            </span>
            <h6>Transactions</h6>
          </li>
        </NavLink>
        <NavLink
          to={
            hasPharmacy ? "/dashboard/pharmacy" : "/dashboard/pharmacy/signup"
          }
        >
          <li>
            <span className={`${styles.iconCon}`}>
              <CartIcon className={`${styles.sideBarIcon}`} />
            </span>
            <h6>Pharmacy</h6>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export { SideBar };
