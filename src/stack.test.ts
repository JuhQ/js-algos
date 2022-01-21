import Stack from "./stack";

describe("Stack", () => {
  it("should initialise empty stack", () => {
    const stack = new Stack();
    expect(stack.length()).toEqual(0);
  });

  it("should be able to push a value to the stack", () => {
    const stack = new Stack<number>();
    stack.push(1);
    expect(stack.length()).toEqual(1);
  });

  it("should be able to push values to the stack", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    expect(stack.length()).toEqual(2);
  });

  it("should be able to pop value from the stack", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    const value = stack.pop();
    expect(stack.length()).toEqual(1);
    expect(value).toEqual(2);
  });

  it("should be able to pop all the values from the stack", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    let value = stack.pop();
    expect(stack.length()).toEqual(1);
    expect(value).toEqual(2);
    value = stack.pop();
    expect(stack.length()).toEqual(0);
    expect(value).toEqual(1);
  });

  it("should be able to get undefined value when popping empty stack", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    let value = stack.pop();
    expect(stack.length()).toEqual(1);
    expect(value).toEqual(2);
    value = stack.pop();
    expect(stack.length()).toEqual(0);
    expect(value).toEqual(1);
    value = stack.pop();
    expect(stack.length()).toEqual(0);
    expect(value).toEqual(undefined);
  });
});
