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

/* Question 8
Write a script to check if a number is even or odd 
*/

let num = prompt("Enter a number: ");
if (num % 2 == 0) {
  alert(num + " is an even number.");
} else {
  alert(num + " is an odd number.");
}

/* Question 10
Write a script to calculate a person's BMI, and use that information to sort people into categories.
*/

let weight = prompt("Enter your weight in kg: ");
let height = prompt("Enter your height in cm: ") / 100;

let bmi = weight / (height * height);
let verdict;

if (bmi < 16) {
  verdict = "severly underweight";
} else if (bmi < 18.5) {
  verdict = "underweight";
} else if (bmi < 25) {
  verdict = "normal";
} else if (bmi < 30) {
  verdict = "overweight";
} else {
  verdict = "obese";
}

alert(
  "Your BMI is " + Math.round(bmi * 100) / 100 + " and you are " + verdict + "."
);
