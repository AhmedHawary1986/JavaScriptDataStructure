import DoublyLinkedList from './DoublyLinkedList.mjs';

let list = new DoublyLinkedList(0);
//console.log(JSON.stringify(list));

list.push(1);


list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
list.push(11)

list.pop();
//console.log(list);

list.unshift(-1)

//console.log(list);

list.shift();
//console.log(list)
//console.log(list.get(4));
//console.log(list.get(8));

list.set(4,4.5);
//console.log(list.get(4));

list.insert(5,4.75);
//console.log(list.get(5));
list.insert(0,-1);
list.insert(10,100)

console.log(list.get(5));
console.log(list.remove(5));
//console.log(list.get(5));

//console.log(list.get(0));

//console.log(list.get(10));
