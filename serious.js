/* Question 6	
Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
*/

let x = prompt("Enter x:");
if (x <= 4) {
  alert("Lower half of 0-9 range.");
} else {
  alert("Upper half of 0-9 range.");
}

/* Question 7
Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of 0-n range
*/

let x = prompt("Enter x: ");
let n = prompt("Enter n: ");
if (x <= Math.floor(n / 2)) {
  alert("Lower half of 0-" + n + " range.");
} else {
  alert("Upper half of 0-" + n + " range.");
}

