const Vertex = class {
  /**
   *  Vertex implementation.
   *  A vertex is defined as one of the vertices of a graph.
   */

  constructor() {
    // Adjacent vertices of this.Vertex stored in a list
    this._neighbors = [];
    this._index = 0;
  }

  // Getters and Setters
  get neighbors() {
    return this._neighbors;
  }

  set appendNeighbors(vertex) {
    this._neighbors.push(vertex);
  }

  get index() {
    return this._index;
  }

  set index(i) {
    this._index = i;
  }
};

export default Vertex;
