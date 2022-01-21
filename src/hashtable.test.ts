import HashTable from "./hashtable";

describe("HashTable", () => {
  it("should be able to initialise empty hash table", () => {
    const hashTable = new HashTable<number>();
    expect(hashTable.size()).toEqual(0);
  });

  it("should be able to set a value in to empty hash table", () => {
    const hashTable = new HashTable<number>();
    hashTable.set("key", 1);
    expect(hashTable.size()).toEqual(1);
  });

  it("should be able to get the hash table content", () => {
    const hashTable = new HashTable<number>();
    hashTable.set("key", 1);
    expect(hashTable.valueOf()).toEqual({ key: 1 });
  });

  it("should be able to get the hash table content, given multiple values", () => {
    const hashTable = new HashTable<number>();
    hashTable.set("key", 1);
    hashTable.set("another", 2);
    expect(hashTable.valueOf()).toEqual({ key: 1, another: 2 });
  });

  it("should be able to find a value from the hash table with given key", () => {
    const hashTable = new HashTable<number>();
    hashTable.set("key", 1);
    hashTable.set("another", 2);
    expect(hashTable.get("another")).toEqual(2);
  });

  it("should be able to remove a value from the hash table with given key", () => {
    const hashTable = new HashTable<number>();
    hashTable.set("key", 1);
    hashTable.set("another", 2);
    hashTable.remove("another");
    expect(hashTable.valueOf()).toEqual({ key: 1 });
  });
});
