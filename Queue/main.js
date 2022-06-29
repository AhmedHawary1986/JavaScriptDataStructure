import Queue from "./Queue.mjs";

let queueue = new Queue(0);



queueue.Enqueue(1)
queueue.Enqueue(2)
queueue.Enqueue(3)

console.log(JSON.stringify(queueue.Dequeue()));

console.log(JSON.stringify(queueue.Dequeue()));

console.log(JSON.stringify(queueue));