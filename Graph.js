import Vertex from "./Vertex.js";

const Graph = class {
  /**
   * Dijkstra's algorithm implementation.
   * Modified to find the shortes path to a single destination vertex.
   * Adapted from w3schools (dsa_algo_graphs_dijkstra).
   */

  constructor() {
    this.adjacencyList = this.#generateGraph();
  }

  #generateGraph() {
    /**
     *  Generates a graph represented as a Adjacency List following
     *  the rules to move the knight in a classic chess game
     *  (L shape movements in a 8x8 tiles)
     *  Each vertex is represented as an array index and its value is
     *  the information about its own adjacent vertices {Array} (neighbors)
     */

    // 8x8 tiles
    const ROWS = 8;
    const COLUMNS = 8;

    let index = 0;

    const adjacencyList = [];

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLUMNS; j++) {
        const vertex = new Vertex();
        vertex.index = index;

        // Check the allowed movements
        if (i - 2 >= 0 && j + 1 <= 7) vertex.appendNeighbors = [i - 2, j + 1];
        if (i - 1 >= 0 && j + 2 <= 7) vertex.appendNeighbors = [i - 1, j + 2];
        if (i + 1 <= 7 && j + 2 <= 7) vertex.appendNeighbors = [i + 1, j + 2];
        if (i + 2 <= 7 && j + 1 <= 7) vertex.appendNeighbors = [i + 2, j + 1];
        if (i + 2 <= 7 && j - 1 >= 0) vertex.appendNeighbors = [i + 2, j - 1];
        if (i + 1 <= 7 && j - 2 >= 0) vertex.appendNeighbors = [i + 1, j - 2];
        if (i - 1 >= 0 && j - 2 >= 0) vertex.appendNeighbors = [i - 1, j - 2];
        if (i - 2 >= 0 && j - 1 >= 0) vertex.appendNeighbors = [i - 2, j - 1];

        adjacencyList.push(vertex);

        index++;
      }
    }

    return adjacencyList;
  }

  printGraph() {
    this.adjacencyList.forEach((vertex) => {
      console.log(`${vertex.index}: ${vertex.neighbors}`);
    });
  }
};

export default Graph;
