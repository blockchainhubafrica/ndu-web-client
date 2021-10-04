import React from "react";
import { FullLogoIcon } from "../../assets";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles["container"]} py-14`}>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <FullLogoIcon />
        <p className="ml-10 mt-5 md:mt-0">All rights reserved 2021</p>
      </div>
    </footer>
  );
};

export { Footer };
