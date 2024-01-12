export const generateRangeArray = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
