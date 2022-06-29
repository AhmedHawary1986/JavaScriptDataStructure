import BST from './BST.mjs'

let myTree = new BST();

myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);





console.log(myTree.BFS());
console.log(myTree.DFSPreOrder());
console.log(myTree.DFSPostOrder());
console.log(myTree.DFSInOrder());