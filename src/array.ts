class MyArray<T> {
  private data: T[] = [];

  public length(): number {
    return this.data.length;
  }

  public push(value: T): void {
    this.data.push(value);
  }

  public valueOf(): T[] {
    return this.data;
  }

  public get(index: number): T {
    return this.data[index];
  }

  public set(index: number, value: T): void {
    this.data[index] = value;
  }

  public remove(index: number): void {
    this.data.splice(index, 1);
  }

  public pop(): T {
    return this.data.pop();
  }

  public shift(): T {
    return this.data.shift();
  }
}

export default MyArray;
