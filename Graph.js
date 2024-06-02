import Vertex from "./Vertex.js";

const Graph = class {
  /**
   * Contains the allowed movements and methods to calculate
   * the shortest path between two tiles (8x8 chess board)
   *
   * The problem is solved representing a graph as an adjacency list
   * and executing a breadth-first search algorithm
   */

  // String array (coordinates of each vertex)
  #tilesMap = new Array(64);

  constructor() {
    // List of Vertices (vertex)
    this.adjacencyList = this.#generateAdjacencyList();
  }

  #generateAdjacencyList() {
    /**
     *  Generates a graph represented as a Adjacency List following
     *  the rules to move the knight in a classic chess game
     *  (L shape movements in a 8x8 tiles)
     *  Each vertex is represented as an array index and its value is
     *  the information about its own adjacent vertices {Array} (neighbors)
     *  @returns {Array} List of integers (indexes) representing each vertex
     */

    // 8x8 tiles
    const ROWS = 8;
    const COLUMNS = 8;

    let index = 0;

    const adjacencyList = new Array(64);

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLUMNS; j++) {
        const vertex = new Vertex();
        vertex.index = index;
        vertex.coordinate = [i, j];

        // Check the allowed movements
        if (i - 2 >= 0 && j + 1 <= 7)
          vertex.appendNeighbors = JSON.stringify([i - 2, j + 1]);
        if (i - 1 >= 0 && j + 2 <= 7)
          vertex.appendNeighbors = JSON.stringify([i - 1, j + 2]);
        if (i + 1 <= 7 && j + 2 <= 7)
          vertex.appendNeighbors = JSON.stringify([i + 1, j + 2]);
        if (i + 2 <= 7 && j + 1 <= 7)
          vertex.appendNeighbors = JSON.stringify([i + 2, j + 1]);
        if (i + 2 <= 7 && j - 1 >= 0)
          vertex.appendNeighbors = JSON.stringify([i + 2, j - 1]);
        if (i + 1 <= 7 && j - 2 >= 0)
          vertex.appendNeighbors = JSON.stringify([i + 1, j - 2]);
        if (i - 1 >= 0 && j - 2 >= 0)
          vertex.appendNeighbors = JSON.stringify([i - 1, j - 2]);
        if (i - 2 >= 0 && j - 1 >= 0)
          vertex.appendNeighbors = JSON.stringify([i - 2, j - 1]);

        adjacencyList[index] = vertex;

        this.#tilesMap[index] = JSON.stringify([i, j]);

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

  getShortestRoute(startTile, finalTile) {
    /**
     * Executes a depth-first search algorithm to look for the shortest
     * route in this Graph
     * @param {Array} startTile - starting position coordinate (e.g., [3,4]).
     * @param {Array} finalTile - final position coordinate (e.g., [6,1]).
     * @returns {Array} List of tiles to visit before reaching the final tile.
     */

    const route = [];
    const sTile = JSON.stringify(startTile);
    const fTile = JSON.stringify(finalTile);

    if (sTile === fTile) {
      route.push(startTile, finalTile);
      return route;
    }

    // Push the initialPosition (vertex) in q
    const queue = [this.adjacencyList[this.#tilesMap.indexOf(sTile)]];
    let isRouteUnkown = true;
    let currentVertex;

    while (0 < queue.length && isRouteUnkown) {
      currentVertex = queue.shift();

      for (const neighbor of currentVertex.neighbors) {
        let tmpNeighbor = this.adjacencyList[this.#tilesMap.indexOf(neighbor)];
        if (null === tmpNeighbor.previousVertex)
          tmpNeighbor.previousVertex = currentVertex;

        if (fTile === neighbor) {
          isRouteUnkown = false;
          break;
        }

        queue.push(tmpNeighbor);
      }
    }

    // Get the route following the previousVertex of each node
    let tmpVertex = this.adjacencyList[this.#tilesMap.indexOf(fTile)];

    // Update to NULL the start vertex previousVertex.
    this.adjacencyList[this.#tilesMap.indexOf(sTile)].previousVertex = null;

    route.push(tmpVertex.coordinate);

    while (null !== tmpVertex.previousVertex) {
      route.unshift(tmpVertex.previousVertex.coordinate);
      tmpVertex = tmpVertex.previousVertex;
    }

    return route;
  }
};

export default Graph;
