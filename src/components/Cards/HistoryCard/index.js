import React from "react";

import styles from "./historyCard.module.css";

const HistoryCard = ({ Icon, headText, subText, date, type }) => {
  return (
    <div className={`${styles["container"]} flex items-start py-3`}>
      <div className={`${styles[`icon-${type}`]} py-2 px-3 mr-4`}>
        {Icon ? <Icon /> : ""}
      </div>
      <div>
        <h1>{headText}</h1>
        <p>{subText}</p>
      </div>
      <div className="ml-auto">
        <h2>{date}</h2>
        <p className={`${styles[`text-${type}`]} `}>{type}</p>
      </div>
    </div>
  );
};

export { HistoryCard };
