import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CartIcon, DashBoardIcon, MoneyIcon, UserIcon } from "../../assets";
import { useUserContext } from "../../contexts/userContext";
import styles from "./dashboard-footer.module.css";

function DashboardFooter(props) {
  const activeRoute = useLocation().pathname;
  const { user } = useUserContext();
  const hasPharmacy = user.pharmacyDetails;

  const linkClass = (route) => {
    if (activeRoute.includes(route)) return `${styles["active"]}`;

    return ``;
  };

  return (
    <div className={`${styles["container"]} lg:hidden`}>
      <ul className="flex justify-between pt-6 pb-10 container">
        <li className={linkClass("/dashboard/user")}>
          <Link to="/dashboard/user">
            <DashBoardIcon />
          </Link>
        </li>
        <li className={linkClass("/dashboard/user/profile")}>
          <Link to="/dashboard/user">
            <UserIcon />
          </Link>
        </li>
        <li className={linkClass("/dashboard/user/transactions")}>
          <Link to="/dashboard/user">
            <MoneyIcon />
          </Link>
        </li>
        <li className={linkClass("/dashboard/pharmacy")}>
          <Link
            to={
              hasPharmacy ? "/dashboard/pharmacy" : "/dashboard/pharmacy/signup"
            }
          >
            <CartIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { DashboardFooter };
