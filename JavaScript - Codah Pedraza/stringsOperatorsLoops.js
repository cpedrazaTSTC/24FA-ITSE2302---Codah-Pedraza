/* Codah Pedraza
   10/3/24
   24/FA ITSE 2302-7PDH2
   Intermediate Web Programming
*/

// Three variables are assigned an individual string value
var string1 = "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
var string2 = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
var string3 = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

// Using substrings, values found between these characters are assigned to their corresponding variable(s)
var s1num1 = string1.substring(10, 11);
var s1num2 = string1.substring(52, 53);
var s1num3 = string1.substring(127, 128);
var s2num1 = string2.substring(15, 16);
var s2num2 = string2.substring(63, 64);
var s2num3 = string2.substring(96, 100);

// Separates 100 into "10" and "0" with the use of an array
var s2num3Array = [s2num3.substring(0, 2), s2num3.substring(2, 3)];

// In this case, parse allows strings to turn into integers which are then assigned to variables
var s1num1Parsed = parseInt(s1num1);
var s1num2Parsed = parseInt(s1num2);
var s1num3Parsed = parseInt(s1num3);
var s2num1Parsed = parseInt(s2num1);
var s2num2Parsed = parseInt(s2num2);
var s2num3Parsed = parseInt(s2num3Array);

// Parsed numbers all add together to create a sum
var sumTotal = (s1num1Parsed + s1num2Parsed + s1num3Parsed + s2num1Parsed + s2num2Parsed + s2num3Parsed);

// Prints out to the console
console.log("The variable sumTotal is storing " + sumTotal);

// Extracting "San Antonio" from the string2 variable
var string2Extraction = string2.substring(41, 52);

// String 3 is set to replace "El Paso" with "San Antonio" with the contribution of the string2Extraction variable
string3 = string3.replace("El Paso", string2Extraction);

// Prints out string3 to the console
console.log(string3);

// While loop which is set to print out a specific string 10 times (the variable "i" in this case is set to 1)
var i = s1num3Parsed;
while (i <= parseInt(s2num3Array[0])){
    console.log("I saw " + i + " car(s) on my trip.");
    i = i + 1;
}