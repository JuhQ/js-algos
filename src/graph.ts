/* eslint-disable no-console */
class Graph<T> {
  private vertices = new Set<T>();

  private adjacent = new Map<T, Set<T>>();

  public vertexLength(): number {
    return this.vertices.size;
  }

  public edgeLength(): number {
    let length = 0;

    this.adjacent.forEach((value) => {
      length += value.size;
    });

    return length;
  }

  public log() {
    console.log("vertices", this.vertices);
    console.log("adjacent", this.adjacent);
  }

  public addVertex(vertex: T): void {
    this.vertices.add(vertex);

    if (!this.adjacent.get(vertex)) {
      this.adjacent.set(vertex, new Set<T>());
    }
  }

  public addEdge(a: T, b: T): void {
    this.addVertex(a);
    this.addVertex(b);
    this.adjacent.get(b).add(a);
  }

  public removeVertex(vertex: T): void {
    this.adjacent.delete(vertex);

    this.adjacent.forEach((value) => {
      value.delete(vertex);
    });

    this.vertices.delete(vertex);
  }

  public removeEdge(a: T, b: T): void {
    this.adjacent.get(a).delete(b);
    this.adjacent.get(b).delete(a);
  }

  public containsVertex(vertex: T): boolean {
    return this.vertices.has(vertex);
  }

  public containsEdge(a: T, b: T): boolean {
    const edgeFromAtoB = this.adjacent.get(a)?.has(b);
    const edgeFromBtoA = this.adjacent.get(b)?.has(a);

    return edgeFromAtoB || edgeFromBtoA || false;
  }
}

export default Graph;
