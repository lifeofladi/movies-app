/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { count, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(count / pageSize);
  const numPages = _.range(1, pageCount + 1);

  if (pageCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a
            href="!#"
            className="page-link"
            // onClick={}
          >
            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          </a>
        </li>
        {numPages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              href='!#'
              className="page-link"
              onClick={() => onPageChange(page)}
              style={{cursor: "pointer"}}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            href="!#"
            className="page-link"
            // onClick={}
          >
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
