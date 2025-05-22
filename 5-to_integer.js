#!/usr/bin/node
// Get the first argument
const arg = process.argv[2];

// Convert to integer and check if it's a valid number
const num = parseInt(arg);
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
