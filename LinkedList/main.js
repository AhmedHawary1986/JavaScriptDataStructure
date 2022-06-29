
import LinkedList from './LinkedList.mjs';

let list = new LinkedList(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

let lastNode = list.pop();
console.log(lastNode)

list.Unshift(0);
console.log(JSON.stringify(list));

let shiftNode = list.Shift();
console.log(shiftNode);

console.log(JSON.stringify(list))

console.log(list.get(0));

list.set(1,1.5);
console.log(JSON.stringify(list));

list.insert(0,0);
console.log(JSON.stringify(list));

list.insert(5,5);
console.log(JSON.stringify(list));

list.insert(2,120);
console.log(JSON.stringify(list));


list.remove(0);
console.log(JSON.stringify(list));

list.remove(5)
console.log(JSON.stringify(list));

list.remove(1);
console.log(JSON.stringify(list));
