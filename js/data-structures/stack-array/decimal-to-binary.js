const Stack = require("./stack-array");

const decimalToBinary = (num) => {
  console.time("Execution time");
  // const remStack = [];
  const remStack = new Stack();

  let quotient = num;
  while (quotient > 0) {
    let remainder = quotient % 2;
    quotient = Math.floor(quotient / 2);

    // Add remainder to end of binary
    remStack.push(remainder);
  }
  let binary = "";
  // while (remStack.length !== 0) {
  while (!remStack.isEmpty()) {
    binary = `${binary}${remStack.pop()}`;
  }
  console.timeEnd("Execution time");
  return binary;
};

console.log(
  decimalToBinary(
    58484939349393939393939848584849393493939393939398485848493934939393939393984858484939349393939393939848584849393493939393939398485848493934939393939393984858484939349393939393939848584849399
  )
);
