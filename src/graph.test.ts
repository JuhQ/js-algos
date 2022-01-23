import Graph from "./graph";

describe("Graph", () => {
  it("should initialise an empty graph", () => {
    const graph = new Graph();
    expect(graph.vertexLength()).toEqual(0);
  });

  it("should be able to add an vertex", () => {
    const graph = new Graph<number>();

    graph.addVertex(1);

    expect(graph.vertexLength()).toEqual(1);
  });

  it("should be able to add an edge", () => {
    const graph = new Graph<number>();

    graph.addEdge(1, 2);

    expect(graph.vertexLength()).toEqual(2);
    expect(graph.edgeLength()).toEqual(1);
  });

  it("should be able to add multiple edges", () => {
    const graph = new Graph<number>();

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    expect(graph.vertexLength()).toEqual(3);
    expect(graph.edgeLength()).toEqual(3);
  });

  it("should be able to remove a vertex", () => {
    const graph = new Graph<number>();

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    graph.removeVertex(1);

    expect(graph.vertexLength()).toEqual(2);
    expect(graph.edgeLength()).toEqual(1);
  });

  it("should be able to remove a edge", () => {
    const graph = new Graph<number>();

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    graph.removeEdge(1, 2);

    expect(graph.vertexLength()).toEqual(3);
    expect(graph.edgeLength()).toEqual(2);
  });

  it("should be able to find a vertex", () => {
    const graph = new Graph<number>();

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    expect(graph.containsVertex(2)).toEqual(true);
  });

  it("should not able to find a vertex, given the vertex does not exist", () => {
    const graph = new Graph<number>();

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    expect(graph.containsVertex(5)).toEqual(false);
  });

  it("should be able to find a edge", () => {
    const graph = new Graph<number>();

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    expect(graph.containsEdge(1, 3)).toEqual(true);
  });

  it("should not able to find a edge, given the first vertex does not exist but the second does", () => {
    const graph = new Graph<number>();

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    expect(graph.containsEdge(5, 3)).toEqual(false);
  });

  it("should not able to find a edge, given the first vertex exists but the second does not", () => {
    const graph = new Graph<number>();

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    expect(graph.containsEdge(1, 4)).toEqual(false);
  });

  // TODO: this should be tested some other way
  it("should be able to call log method (for code coverage)", () => {
    const graph = new Graph<number>();
    graph.log();
  });
});
