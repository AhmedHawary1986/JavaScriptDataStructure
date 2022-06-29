import Stack from './Stack.mjs';

let s = new Stack(1);
//console.log(s);

s.push(2);
s.push(3);
s.push(4);

console.log(JSON.stringify(s.pop()));

console.log(JSON.stringify(s));