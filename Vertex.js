const Vertex = class {
  /**
   *  Vertex implementation.
   *  A vertex is defined as one of the vertices of a graph.
   */

  constructor() {
    // Adjacent vertices of this.Vertex stored in a list
    this._neighbors = [];
    this._index = 0;
    this._previousVertex = null;
    this._coordinate = null;
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

  get previousVertex() {
    return this._previousVertex;
  }

  set previousVertex(value) {
    this._previousVertex = value;
  }

  get coordinate() {
    return this._coordinate;
  }

  set coordinate(value) {
    this._coordinate = value;
  }
};

export default Vertex;
