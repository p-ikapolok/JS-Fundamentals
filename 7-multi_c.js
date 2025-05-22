#!/usr/bin/node
// Get the first argument and convert to integer
const x = parseInt(process.argv[2]);

// Check if valid positive integer
if (isNaN(x) || x <= 0) {
  console.log('Missing number of occurrences');
} else {
  // Print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
