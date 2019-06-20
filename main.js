var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chainingResult = integers
// Sort the numbers in descending order (10, 9, 8, 7, etc).
.sort((a, b) => a-b)
.reverse() 
// or simply do b-a instead of a-b and leave .reverse() out of the code.

// Remove any integers greater than 19.
.filter((num) => num < 19)
// Multiply each remaining number by 1.5 and then subtract 1.
.map((num) => (num * 1.5) -1 )
// Then output (either in the DOM or the console) the sum of all the resulting numbers. (edited) 
.reduce( (current, next) => current + next )