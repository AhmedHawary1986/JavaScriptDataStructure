import HashTable from "./HashTable.mjs";

let myHashTable = new HashTable();

myHashTable.set('Ahmed','Ashraf');
myHashTable.set('Esraa','Mohamed');
myHashTable.set('Eyad','Elhawary');
myHashTable.set('Adam','Ahmed');
myHashTable.set('Gamila','Dodo');


//console.log(JSON.stringify(myHashTable));

console.log(myHashTable.get('Gamila'));

console.log(JSON.stringify(myHashTable.getAllKeys()));
