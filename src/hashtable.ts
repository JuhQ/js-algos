interface Data<T> {
  [key: string]: T;
}

class HashTable<T> {
  private data: Map<string, T> = new Map<string, T>();

  public size(): number {
    return this.data.size;
  }

  public valueOf(): Data<T> {
    return Object.fromEntries(this.data);
  }

  public set(key: string, value: T): void {
    this.data.set(key, value);
  }

  public get(key: string): T {
    return this.data.get(key);
  }

  public remove(key: string): void {
    this.data.delete(key);
  }
}

export default HashTable;
