#!/usr/bin/node
// Get the two arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Print in the format "arg1 is arg2" (handles undefined cases)
console.log(`${arg1 || 'undefined'} is ${arg2 || 'undefined'}`);
