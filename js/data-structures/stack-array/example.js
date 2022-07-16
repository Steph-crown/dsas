const Stack = require("./stack-array");

const stack = new Stack();
console.log("stack size", stack.size()); // 0
console.log("stack isEmpty", stack.isEmpty()); // true
stack.push(1);
stack.push(2);
stack.push(3);
console.log("stack size", stack.size()); // 3
console.log("stack isEmpty", stack.isEmpty()); // false
console.log("stack peek", stack.peek()); // 3
stack.pop();
console.log("stack peek", stack.peek()); // 2
stack.pop();
console.log("stack peek", stack.peek()); // 1
stack.pop();
console.log("stack peek", stack.peek()); // undefined
console.log("stack isEmpty", stack.isEmpty()); // true
