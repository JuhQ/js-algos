import LinkedList from "./linkedlist";

describe("LinkedList", () => {
  it("should initialise an empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.valueOf()).toEqual({ data: undefined, next: null });
  });

  it("should be able to add value to the linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    expect(linkedList.valueOf()).toEqual({ data: 1, next: null });
  });

  it("should be able to add two values to the linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.valueOf()).toEqual({
      data: 1,
      next: { data: 2, next: null },
    });
  });

  it("should be able to add three values to the linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.valueOf()).toEqual({
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: null,
        },
      },
    });
  });

  it("should get the current value", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    expect(linkedList.value()).toEqual(1);
  });

  it("should get the current object", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    expect(linkedList.valueOf()).toEqual({
      data: 1,
      next: null,
    });
    expect(linkedList.current().valueOf()).toEqual({
      data: 1,
      next: null,
    });
  });

  it("should get the next object", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.next().valueOf()).toEqual({
      data: 2,
      next: null,
    });
    expect(linkedList.next().current().valueOf()).toEqual({
      data: 2,
      next: null,
    });
  });

  it("should get the next value, given only one value", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    expect(linkedList.next()).toEqual(null);
  });

  it("should get the next value, given two values", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.next().value()).toEqual(2);
  });

  it("should get the next value, given three values", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.next().value()).toEqual(2);
  });

  it("should be able to find a value from the linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.contains(2)).toEqual(true);
  });

  it("should not be able to find a value from the linked list, given the value does not exist", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.contains(5)).toEqual(false);
  });

  it("should not be able to find a value from the linked list, given the linked list is empty", () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.contains(1)).toEqual(false);
  });

  it("should be able to add value in the beginning of an empty linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.addFirst(1000);
    expect(linkedList.valueOf()).toEqual({
      data: 1000,
      next: null,
    });
  });

  it("should be able to add value in the beginning", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.addFirst(1000);

    expect(linkedList.valueOf()).toEqual({
      data: 1000,
      next: {
        data: 1,
        next: {
          data: 2,
          next: {
            data: 3,
            next: null,
          },
        },
      },
    });
  });

  it("should be able to add an existing linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);

    const linkedList2 = new LinkedList<number>();
    linkedList2.add(1);
    linkedList2.addLinkedList(linkedList);

    expect(linkedList2.valueOf()).toEqual({
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
            next: null,
          },
        },
      },
    });
  });

  it("should not be able to accept an itself as an linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    linkedList.addLinkedList(linkedList);

    expect(linkedList.valueOf()).toEqual({
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: null,
        },
      },
    });
  });

  it("should be able to get the first value", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.getFirst()).toEqual(1);
  });

  it("should be able to get the last value", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.getLast()).toEqual(3);
  });

  it("should not able to get the index of a given value when linked list is empty", () => {
    const linkedList = new LinkedList<number>();

    expect(linkedList.indexOf(1)).toEqual(-1);
  });

  it("should not able to get the index of a given value which does not exist in the linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.indexOf(5)).toEqual(-1);
  });

  it("should be able to get the index of a given value", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.indexOf(2)).toEqual(1);
  });

  it("should get the size of 0 when linked list is empty", () => {
    const linkedList = new LinkedList<number>();

    expect(linkedList.size()).toEqual(0);
  });

  it("should be able to get the size of the linked list", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.size()).toEqual(3);
  });
});
