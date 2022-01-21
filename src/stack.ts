class Stack<T> {
  private data: T[] = [];

  public length(): number {
    return this.data.length;
  }

  public push(value: T): void {
    this.data.push(value);
  }

  public pop(): T {
    return this.data.pop();
  }
}

export default Stack;
