/* Codah Pedraza
   10/14/24
   24/FA ITSE 2302-7PDH2
   4A Intro To C+ Programming App
*/

// Global variables
var userInput1;
var userInputInt1;
var userInput2;
var userInputInt2;
var error;
var product;

// Do-while loop that functions as validation
// and returns information back to the user
do{
    error = false;
    userInput1 = prompt("Enter a number between 15 and 20: ");
    userInputInt1 = parseInt(userInput1);
    userInput2 = prompt("Enter a number between 1 and 10: ");
    userInputInt2 = parseInt(userInput2);
    if (isNaN(userInputInt1)) {
        alert("Incorrect value for input 1! Please try again.");
        error = true;
    }
    else if (userInputInt1 < 15 || userInputInt1 > 20) {
        alert("Input 1 needs to be between 15 and 20. Try again!");
        error = true;
    }
    if (isNaN(userInputInt2)) {
        alert("Incorrect value for input 2! Please try again.");
        error = true;
    }
    else if (userInputInt2 < 1 || userInputInt2 > 10) {
        alert("Input 2 needs to be between 1 and 10. Try again!");
        error = true;
    }
} while (error);

// ================

// If/else statements that return the entered value
// as even or odd
if (userInputInt1 % 2 == 0) {
    alert("The number " + userInputInt1 + " is even!");
}
else {
    alert("The number " + userInputInt1 + " is odd!");
}

if (userInputInt2 % 2 == 0) {
    alert("The number " + userInputInt2 + " is even!");
}
else {
    alert("The number " + userInputInt2 + " is odd!");
}

// ================

// Defined the product variable
product = userInputInt1 * userInputInt2;

// If/else statement that prints out the entered value 
// as even or odd to the console
if (product % 2 == 0) {
    console.log("The number " + product + " is even!");
}
else {
    console.log("The number " + product + " is odd!");
}