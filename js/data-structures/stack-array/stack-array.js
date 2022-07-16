// Create stack data structure with Javascript array
class Stack {
  constructor() {
    this.items = [];
  }

  // add item to the end of the stack
  push(element) {
    this.items.push(element);
  }

  // remove item from the end of the stack
  pop() {
    return this.items.pop();
  }

  // return the last item of the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return !this.items.length > 0;
  }

  // remove all items in the array
  clear() {
    this.items = [];
  }

  // returns the size of the stack
  size() {
    return this.items.length;
  }
}

module.exports = Stack;
