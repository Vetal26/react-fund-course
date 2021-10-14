// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line arrow-body-style
export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPageArray = (totalPages) => {
  const result = [];
  for (let i = 0; i < totalPages; i += 1) {
    result.push(i + 1);
  }
  return result;
};
