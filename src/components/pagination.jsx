import React from "react";
import _ from "lodash";

const Pagination = props => {
  const {itemsCount, pageSize, currentPage, onPageChange} = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  const numPages = _.range(1, pageCount + 1);

  if (pageCount === 1) 
    return null;
  
  return (<nav>
    <ul className="pagination">
      {
        numPages.map(page => (<li key={page} className={page === currentPage
            ? 'page-item active'
            : 'page-item'}>
          <a className="page-link" onClick={() => onPageChange(page)} style={{
              cursor: 'pointer'
            }}>{page}</a>
        </li>))
      }
    </ul>
  </nav>);
};

export default Pagination;
