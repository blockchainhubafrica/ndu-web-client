import React from "react";

import styles from "./howItWorksCard.module.css";

const HowItWorksCard = ({ Icon, text }) => {
  return (
    <div
      className={`${styles["container"]} flex flex-col justify-center items-center`}
    >
      <div className={`${styles["icon-container"]} p-10`}>
        {Icon ? <Icon /> : ""}
      </div>
      <p className="mt-10 mx-6">{text}</p>
    </div>
  );
};

export { HowItWorksCard };
