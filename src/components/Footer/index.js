import React from "react";
import { FullLogoIcon } from "../../assets";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles["container"]} py-14`}>
      <div className="flex justify-center items-center">
        <FullLogoIcon />
        <p className="ml-10">All rights reserved 2021</p>
      </div>
    </footer>
  );
};

export { Footer };
