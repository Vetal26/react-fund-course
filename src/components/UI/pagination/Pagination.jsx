import React from 'react';
import { getPageArray } from '../../../utils/pages';

// eslint-disable-next-line react/prop-types
const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPageArray(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page__current' : 'page'}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
