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
});
