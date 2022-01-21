class Queue<T> {
  private data: T[] = [];

  public length(): number {
    return this.data.length;
  }

  public enqueue(value: T): void {
    this.data.push(value);
  }

  public dequeue(): T {
    return this.data.shift();
  }
}

export default Queue;
