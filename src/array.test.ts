import MyArray from "./array";

describe("Array", () => {
  it("should initialise an empty array", () => {
    const array = new MyArray();
    expect(array.length()).toEqual(0);
  });

  it("should be able to push a value to the array", () => {
    const array = new MyArray<number>();
    array.push(1);
    expect(array.length()).toEqual(1);
  });

  it("should be able to push multiple values to the array", () => {
    const array = new MyArray<number>();
    array.push(1);
    array.push(2);
    expect(array.length()).toEqual(2);
  });

  it("should be able to get the values of the array", () => {
    const array = new MyArray<number>();
    array.push(1);
    array.push(2);
    expect(array.valueOf()).toEqual([1, 2]);
  });

  it("should be able to get value from index", () => {
    const array = new MyArray<number>();
    array.push(1);
    array.push(2);
    expect(array.get(1)).toEqual(2);
  });

  it("should be able to set value from a given index", () => {
    const array = new MyArray<number>();
    array.push(1);
    array.push(2);
    array.set(1, 3);
    expect(array.get(1)).toEqual(3);
  });

  it("should be able to remove value from a given index", () => {
    const array = new MyArray<number>();
    array.push(1);
    array.push(2);
    array.remove(1);
    expect(array.get(1)).toEqual(undefined);
  });

  it("should be able to get new array length when removing an item from given index", () => {
    const array = new MyArray<number>();
    array.push(1);
    array.push(2);
    array.remove(1);
    expect(array.length()).toEqual(1);
  });

  it("should remove value from the end of the array and return the value", () => {
    const array = new MyArray<number>();
    array.push(1);
    array.push(2);
    const value = array.pop();
    expect(array.length()).toEqual(1);
    expect(value).toEqual(2);
  });

  it("should remove value from the beginning of the array and return the value", () => {
    const array = new MyArray<number>();
    array.push(1);
    array.push(2);
    const value = array.shift();
    expect(array.length()).toEqual(1);
    expect(value).toEqual(1);
  });
});
