/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types'; 

const Pagination = (props) => {
  const { count, pageSize, currentPage, onPageChange, onNext, onPrev } = props;
  //Number of pages based on total number of available items and number of desired items on page(pageSize) 
  const pageCount = Math.ceil(count / pageSize);
  //An array of page numbers based on number of pages(pageCount) 
  const numPages = _.range(1, pageCount + 1);

  if (pageCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() =>
              (numPages.length >= currentPage && currentPage !== 1) ? onPrev(currentPage) : null
            }
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
            onClick={() =>
              (numPages.length !== currentPage)?onNext(currentPage) : null
            }
          >
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
};

export default Pagination;
