import { useMemo } from 'react';
import { generateRangeArray } from 'utils';

type PaginationProps = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
};

export const usePagination = ({
  totalCount,
  pageSize,
  currentPage,
}: PaginationProps) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const paginationRange = useMemo(() => {
    const totalPageNumbers = 6;

    if (totalPageNumbers >= totalPageCount) {
      return generateRangeArray(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1);
    const rightSiblingIndex = Math.min(currentPage + 1, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 5;
      const leftRange = generateRangeArray(1, leftItemCount);

      return [...leftRange, -1, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 5;
      const rightRange = generateRangeArray(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, -1, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = generateRangeArray(
        leftSiblingIndex,
        rightSiblingIndex
      );
      return [firstPageIndex, -1, ...middleRange, -1, lastPageIndex];
    }
    return [1];
  }, [totalCount, pageSize, currentPage]);

  return { paginationRange, totalPageCount };
};
