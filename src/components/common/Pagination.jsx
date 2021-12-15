import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function Pagination({ itemsCount, pageSize, currentPage, onPageChange }) {
  const numOfPages = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, numOfPages + 1);
  return (
    <>
      {numOfPages !== 1 && (
        <ul className='pagination'>
          {pages.map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? 'active' : ''}`}
            >
              <span onClick={() => onPageChange(page)} className='page-link '>
                {page}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
