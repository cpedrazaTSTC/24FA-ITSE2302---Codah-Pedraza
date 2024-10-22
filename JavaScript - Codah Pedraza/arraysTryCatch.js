/* Codah Pedraza
   10/21/24
   24/FA ITSE 2302-7PDH2
   Intermediate Web Programming
*/

// Global variables that include arrays + personal info.
var siteTopics = ["Academics", "Code", "HTML", "CSS", "JavaScript"];
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var firstName = "Codah";
var birthYear = 2008;

// .push adds another element to the the siteTopics array
siteTopics.push("C++");
// Prints out how many elements are in the siteTopics array to the browser's console
console.log("The length of the siteTopics array is " + siteTopics.length);

// Counter
var i = 0;
// While loop which incorporates the siteTopics array + counter above
while (i < siteTopics.length) {
    console.log(siteTopics[i]);
    i += 1;
}

// Method which reverses the dayNames array
dayNames.reverse();
// For loop that prints out the dayNames array to the console
for (var j = 0; j < dayNames.length; j++) {
    console.log(dayNames[j]);
}

// Removes "Sunday" from the dayNames array
dayNames.shift();

// Try proposes an if conditional and will throw to catch if its true
// Once that happens, catch will then "catch" that throw and store it in a variable, which will then print out to the browser's console
// =========
// Finally prints out to the console with the use of concatenation + appropriate array values
try{
    if (dayNames[0] == "Sunday") {
        throw "Error: Sunday should be missing!";
    }
} catch (error) {
    console.log(error);
} finally {
    console.log(firstName + " was born in the year " + birthYear + ". " + "I think the day was either a " + dayNames[1] + " or " + dayNames[3] + ".");
}