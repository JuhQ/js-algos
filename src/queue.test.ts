import Queue from "./queue";

describe("Array", () => {
  it("should initialise an empty queue", () => {
    const queue = new Queue();
    expect(queue.length()).toEqual(0);
  });

  it("should be able to add a value to the queue", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.length()).toEqual(1);
  });

  it("should be able to add values to the queue", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.length()).toEqual(2);
  });

  it("should be able to get value from the queue", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    const value = queue.dequeue();
    expect(queue.length()).toEqual(1);
    expect(value).toEqual(1);
  });

  it("should be able to get all the values from the queue", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    let value = queue.dequeue();
    expect(queue.length()).toEqual(1);
    expect(value).toEqual(1);
    value = queue.dequeue();
    expect(queue.length()).toEqual(0);
    expect(value).toEqual(2);
  });

  it("should be able to get undefined when getting the last item", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    let value = queue.dequeue();
    expect(queue.length()).toEqual(1);
    expect(value).toEqual(1);
    value = queue.dequeue();
    expect(queue.length()).toEqual(0);
    expect(value).toEqual(2);
    value = queue.dequeue();
    expect(queue.length()).toEqual(0);
    expect(value).toEqual(undefined);
  });

  it("should be able to get undefined when no values is queued", () => {
    const queue = new Queue<number>();
    const value = queue.dequeue();
    expect(value).toEqual(undefined);
  });
});
