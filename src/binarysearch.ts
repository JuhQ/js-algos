const recursiveBinarySearch = (
  list: number[],
  value: number,
  start = 0,
  end = list.length - 1
): number | undefined => {
  const middle = Math.floor((start + end) / 2);

  if (list[middle] === value) {
    return list[middle];
  }

  if (start >= end) {
    return undefined;
  }

  if (value < list[middle]) {
    return recursiveBinarySearch(list, value, start, middle);
  }

  return recursiveBinarySearch(list, value, middle + 1, end);
};

const binarysearch = (list: number[], value: number): number | undefined =>
  recursiveBinarySearch(list, value);

export default binarysearch;
