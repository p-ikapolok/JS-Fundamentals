#!/usr/bin/node
// Recursive factorial function
function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get and convert argument
const num = parseInt(process.argv[2]);

// Compute and print factorial
console.log(factorial(num));
