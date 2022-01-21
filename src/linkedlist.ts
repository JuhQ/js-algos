/* eslint-disable no-plusplus */
interface ValueOf<T> {
  data: T | undefined;
  next: ValueOf<T> | null;
}

type Data<T> = T | undefined;
// eslint-disable-next-line no-use-before-define
type Next<T> = LinkedList<T> | null;

class LinkedList<T> {
  private data: Data<T> = undefined;

  private nextValue: Next<T> = null;

  public current(): LinkedList<T> {
    return this;
  }

  public value(): Data<T> {
    return this.data;
  }

  public next(): LinkedList<T> | null {
    return this.nextValue?.current() || null;
  }

  public contains(value: T): boolean {
    let list: LinkedList<T> = this.current();

    while (list.next()) {
      if (list.value() === value) {
        return true;
      }
      list = list.next();
    }

    return false;
  }

  public valueOf(): ValueOf<T> {
    return {
      data: this.data,
      next: this.nextValue?.valueOf() || null,
    };
  }

  public add(value: T): void {
    if (this.data === undefined) {
      this.data = value;
    } else if (this.nextValue === null) {
      const data = new LinkedList<T>();
      data.add(value);
      this.nextValue = data;
    } else {
      this.nextValue.add(value);
    }
  }

  public addFirst(value: T): void {
    if (this.data === undefined) {
      this.add(value);
    } else {
      const linkedList = new LinkedList<T>();
      linkedList.add(value);

      let list: LinkedList<T> = this.current();
      while (list !== null) {
        linkedList.add(list.value());
        list = list.next();
      }

      this.data = linkedList.value();
      this.nextValue = linkedList.next();
    }
  }

  public addLinkedList(linkedlist: LinkedList<T>): void {
    if (linkedlist !== this) {
      let list: LinkedList<T> = linkedlist;

      while (list !== null) {
        this.add(list.value());
        list = list.next();
      }
    }
  }

  public getFirst(): T {
    return this.value();
  }

  public getLast(): T {
    let list: LinkedList<T> = this.current();

    while (list.next()) {
      list = list.next();
    }

    return list.value();
  }

  public indexOf(value: T): number {
    let index = 0;
    let list: LinkedList<T> = this.current();
    let found = false;

    while (list.next()) {
      if (list.value() === value) {
        found = true;
        break;
      }
      list = list.next();
      index++;
    }

    if (!found) {
      index = -1;
    }

    return index;
  }

  public size(): number {
    if (this.data === undefined) {
      return 0;
    }

    let size = 1;
    let list: LinkedList<T> = this.current();

    while (list.next()) {
      list = list.next();
      size++;
    }

    return size;
  }
}

export default LinkedList;
