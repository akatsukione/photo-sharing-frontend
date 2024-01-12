import { usePagination } from 'hooks';
import React from 'react';
import { PaginationContainer, PaginationItem } from './styles';
import { PAGINATION_SKIP_LABEL } from 'consts';

type PaginationBarProps = {
  onPageChange: (e: number) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
};

export const PaginationBar: React.FC<PaginationBarProps> = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
}) => {
  const { paginationRange, totalPageCount } = usePagination({
    totalCount,
    currentPage,
    pageSize,
  });
  const onNext = () => {
    onPageChange(Math.min(currentPage + 1, totalPageCount));
  };

  const onPrevious = () => {
    onPageChange(Math.max(currentPage - 1));
  };

  if (paginationRange.length < 2) {
    return null;
  }

  return (
    <PaginationContainer>
      <PaginationItem
        onClick={onPrevious}
        className={currentPage === 1 ? 'disabled' : ''}
      >
        <div className="arrow left" />
      </PaginationItem>

      {paginationRange.map((pageNumber) => {
        if (pageNumber === -1) {
          return (
            <PaginationItem className="dots">
              {PAGINATION_SKIP_LABEL}
            </PaginationItem>
          );
        }
        return (
          <PaginationItem
            onClick={() => onPageChange(pageNumber)}
            key={pageNumber}
            className={currentPage === pageNumber ? 'selected' : ''}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}

      <PaginationItem
        onClick={onNext}
        className={currentPage === totalPageCount ? 'disabled' : ''}
      >
        <div className="arrow right" />
      </PaginationItem>
    </PaginationContainer>
  );
};
