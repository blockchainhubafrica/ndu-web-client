import React from "react";

import styles from "./pagination.module.css";

import { usePagination } from "../../hooks";
import { PaginateArrowLeft, PaginateArrowRight } from "../../assets";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    items,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (!totalCount) return null;

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];
  return (
    <div className={`${styles.container} ${className}`}>
      <button
        onClick={onPrevious}
        className={`${styles["prev"]} ${
          currentPage === 1 ? styles["disabled"] : ""
        }`}
        disabled={currentPage === 1}
      >
        <PaginateArrowLeft className={`inline-block`} />
      </button>

      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === "...") {
          return <span className="pagination-item dots">&#8230;</span>;
        }
        return (
          <button
            key={index}
            onClick={() => onPageChange(pageNumber)}
            className={`${styles["paginationItem"]} ${
              currentPage === pageNumber ? styles["active"] : null
            }`}
          >
            <span>{pageNumber}</span>
          </button>
        );
      })}
      <button
        onClick={onNext}
        className={`${styles["next"]} ${
          currentPage === lastPage ? styles["disabled"] : ""
        }`}
        disabled={currentPage === lastPage}
      >
        <PaginateArrowRight className={`inline`} />
      </button>
    </div>
  );
};

export { Pagination };
