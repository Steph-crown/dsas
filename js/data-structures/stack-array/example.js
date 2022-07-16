const Stack = require("./stack-array");
const StackWithObj = require("./stack-object");

// To test any replace constructore with the class name
const stack = new StackWithObj();
console.log("stack size", stack.size()); // 0
console.log("stack isEmpty", stack.isEmpty()); // true
stack.push(1);
console.log("stack to string", stack.toString());

stack.push(2);
stack.push(3);
console.log("stack size", stack.size()); // 3
console.log("stack isEmpty", stack.isEmpty()); // false
// console.log("stack peek", stack.peek()); // 3
// console.log("stack.pop()", stack.pop());
// console.log("stack peek", stack.peek()); // 2
// console.log("stack.pop()", stack.pop());
// console.log("stack peek", stack.peek()); // 1
// console.log("stack.pop()", stack.pop());
// console.log("stack peek", stack.peek()); // undefined
// console.log("stack isEmpty", stack.isEmpty()); // true
console.log("stack to string", stack.toString());
