import Graph from "./Graph.js";

const graphTest = new Graph();

// graphTest.printGraph();

console.log(JSON.stringify(graphTest.getShortestRoute([0, 0], [7, 7])));
