import React from "react";
import { Link } from "react-router-dom";
import { CartIcon, DashBoardIcon, MoneyIcon, UserIcon } from "../../assets";
import styles from "./dashboard-footer.module.css";

function DashboardFooter(props) {
  return (
    <div className={`${styles["container"]} lg:hidden`}>
      <ul className="flex justify-between pt-6 pb-10 container">
        <li>
          <Link to="/dashboard/user">
            <DashBoardIcon />
          </Link>
        </li>
        <li>
          <Link to="/dashboard/user">
            <UserIcon />
          </Link>
        </li>
        <li>
          <Link to="/dashboard/user">
            <MoneyIcon />
          </Link>
        </li>
        <li>
          <Link to="/dashboard/pharmacy/signup">
            <CartIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { DashboardFooter };
