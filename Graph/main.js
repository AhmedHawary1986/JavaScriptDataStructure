import Graph from "./Graph.mjs";

let myGraph = new Graph();

myGraph.addVertex('Ahmed')
myGraph.addVertex('Esraa')
myGraph.addEdge('Ahmed','Esraa')
myGraph.addVertex('Eyad')
myGraph.addEdge('Ahmed','Eyad')
myGraph.addEdge('Esraa','Eyad')
myGraph.addVertex('Adam');
myGraph.addEdge('Ahmed','Adam')
myGraph.addEdge('Esraa','Adam')
myGraph.addEdge('Eyad','Adam')

myGraph.removeEdge('Ahmed','Esraa')

myGraph.removeVertex('Ahmed')

console.log(JSON.stringify(myGraph))