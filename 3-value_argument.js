#!/usr/bin/node
// Get the first argument without using .length
const firstArg = process.argv[2];

// Print the first argument or "No argument" if none exists
console.log(firstArg === undefined ? "No argument" : firstArg);
