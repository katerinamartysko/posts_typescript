import React, { FC } from 'react';
import { getPagesArray } from '../../../utils/pages';
import { ButtonGroup } from '@mui/material';

interface Props {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

const Pagination: FC<Props> = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map(currentPage => (
        <ButtonGroup
          size="small"
          aria-label="small button group"
          onClick={() => changePage(currentPage)}
          className={page === currentPage ? 'page page__current' : 'page '}
          key={currentPage}
        >
          {currentPage}
        </ButtonGroup>
      ))}
    </div>
  );
};

export default Pagination;
