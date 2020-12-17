/** @format */
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pagination = props => {
  const {
    itemsCount,
    pageSize,
    currentPage,
    onPageChange,
    onNext,
    onPrev,
  } = props;
  //Number of pages based on total number of available items and number of desired items on page(pageSize)
  const pageCount = Math.ceil(itemsCount / pageSize);
  //An array of page numbers based on number of pages(pageCount)
  const numPages = _.range(1, pageCount + 1);

  if (pageCount === 1) return null;

  return (
    <nav>
      <ul className='pagination'>
        <li className='page-item'>
          <Link
            to=''
            className='page-link'
            onClick={() =>
              numPages.length >= currentPage && currentPage !== 1
                ? onPrev(currentPage)
                : null
            }
          >
            <i className='fa fa-angle-double-left' aria-hidden='true'></i>
          </Link>
        </li>
        {numPages.map(page => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <Link
              to=''
              className='page-link'
              onClick={() => onPageChange(page)}
              style={{ cursor: 'pointer' }}
            >
              {page}
            </Link>
          </li>
        ))}
        <li className='page-item'>
          <Link
            to=''
            className='page-link'
            onClick={() =>
              numPages.length !== currentPage ? onNext(currentPage) : null
            }
          >
            <i className='fa fa-angle-double-right' aria-hidden='true'></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default Pagination;
