import binarysearch from "./binarysearch";

const generateArray = (size: number): number[] =>
  Array(size)
    .fill(null)
    .map((_, i) => i);

describe("Binary search", () => {
  it("should find nothing from an empty array", () => {
    expect(binarysearch([], 1)).toEqual(undefined);
  });

  it("should find value from array with only one item", () => {
    expect(binarysearch([1], 1)).toEqual(1);
  });

  it("should be able to find the value, given it exists in the array", () => {
    expect(binarysearch([1, 2, 4], 2)).toEqual(2);
  });

  it("should be able to find the of the first item in the array", () => {
    expect(binarysearch([1, 2, 4], 1)).toEqual(1);
  });

  it("should be able to find the last value in the array", () => {
    expect(binarysearch([1, 2, 4], 4)).toEqual(4);
  });

  it("should not be able to find value which does not exist in the array", () => {
    expect(binarysearch([1, 2, 4], 100)).toEqual(undefined);
  });

  it("should not be able to find a value which does not exist in an larger array", () => {
    expect(binarysearch(generateArray(100000), 1000000)).toEqual(undefined);
  });

  it("should be able to find a value from an larger array", () => {
    expect(binarysearch(generateArray(1000000), 1000000)).toEqual(undefined);
  });
});
