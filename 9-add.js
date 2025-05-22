#!/usr/bin/node
// Function to add two integers
function add(a, b) {
  return a + b;
}

// Get arguments and convert to numbers
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Print the sum (or NaN if invalid)
console.log(add(num1, num2));
