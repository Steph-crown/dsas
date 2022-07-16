// Implement data structure with Javascript object
class Stack {
  #count;
  constructor() {
    this.#count = -1;
    this.items = {};
  }

  // adds item to end of the stack
  push(element) {
    this.#count += 1;
    this.items[this.#count] = element;
  }

  // remove item from the end of the stack
  pop(element) {
    if (this.isEmpty()) return undefined;
    let lastItem = this.items[this.#count];
    delete this.items[this.#count];
    this.#count -= 1;
    return lastItem;
  }

  // return the last item of the stack
  peek() {
    return this.items[this.#count];
  }

  // get the size of the stack
  size() {
    return this.#count + 1;
  }

  // check if the stack is empty
  isEmpty() {
    return this.#count === -1;
  }

  // clear the stack
  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  // return a string form of the stack
  toString() {
    if (this.isEmpty()) return "";
    let str = `${this.items[0]}`;
    for (let i = 1; i <= this.#count; i++) {
      str = `${str},${this.items[i]}`;
    }
    return str;
  }
}

module.exports = Stack;
