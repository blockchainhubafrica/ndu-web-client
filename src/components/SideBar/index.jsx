import React from "react";
import styles from "./sideBar.module.css";
import {
  CartIcon,
  DashBoardIcon,
  MoneyIcon,
  NduLogo,
  UserIcon,
} from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

function SideBar() {
  const activeRoute = useLocation().pathname;

  const { user } = useUserContext();
  const hasPharmacy = user.pharmacyDetails;
  const linkClass = (route) => {
    if (activeRoute.includes(route))
      return `${styles["iconCon"]} ${styles["active"]}`;

    return `${styles["iconCon"]}`;
  };

  return (
    <div className={`${styles.sideBarCon} py-10 hidden lg:block`}>
      <NduLogo className={`${styles.nduLogo}`} />
      <ul>
        <li className="flex mb-8">
          <Link to="/dashboard/user">
            <div className={linkClass("/dashboard/user")}>
              <DashBoardIcon className={`${styles.sideBarIcon}`} />
            </div>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="flex mb-8">
          <Link to="/dashboard/user">
            <div className={linkClass("/dashboard/user/profile")}>
              <UserIcon className={`${styles.sideBarIcon}`} />
            </div>
            <span>Profile</span>
          </Link>
        </li>
        <li className="flex mb-8">
          <Link to="/dashboard/user">
            <div className={linkClass("/dashboard/user/transactions")}>
              <MoneyIcon className={`${styles.sideBarIcon}`} />
            </div>
            <span>Transactions</span>
          </Link>
        </li>
        <li className="flex mb-8">
          <Link
            to={
              hasPharmacy ? "/dashboard/pharmacy" : "/dashboard/pharmacy/signup"
            }
          >
            <div className={linkClass("/dashboard/pharmacy")}>
              <CartIcon className={`${styles.sideBarIcon}`} />
            </div>
            <span>Pharmacy</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { SideBar };
