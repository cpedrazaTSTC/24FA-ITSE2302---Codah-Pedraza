/* Codah Pedraza
   11/2/24
   24/FA ITSE 2302-7PDH2
   4A Intro To C+ Programming App
*/

// Adds an event listener to the mainform id when the page finishes
// loading
window.addEventListener("DOMContentLoaded", (event) => {
   document.getElementById("mainform")?.addEventListener("submit", handleSubmit);
});

// Function 1: handles functions 2 & 3 additionlly
function handleSubmit(event) {
   // Prevents the page from reloading everytime a reset/submit button is pressed
   event.preventDefault();

   if (validateForm()){
      // Constant for total amount
      const totalAmt = calculateTotal();

      // Values are outputed to the console
      console.log("Selected items total: $" + totalAmt);
   }
}

// Function 2: validation
function validateForm(){
   // These constants retrieve the values of both inputs
   const question1Input = document.getElementById("firstquestion").value;
   const question2Input = document.getElementById("secondquestion").value;

   // Validation for open/empty strings - an alert will
   // appear for the user
   if (question1Input == ""){
      alert("Please ask a question!");
      document.getElementById("firstquestion").focus();
      return false;
   }

   if (question2Input == ""){
      alert("Please ask a question!");
      document.getElementById("secondquestion").focus();
      return false;
   }

   // If these two statements are false, then the argument will
   // return as true
   return true;
}

// Function 3: calculations
function calculateTotal(){
   // Variable that will hold the total amount
   // in dollars
   var total = 0;

   // When these checkboxes are checked, calculations will
   // execute based off each of the respective values
   if (document.getElementById("1-year college plan").checked){
      total += parseInt(document.getElementById("1-year college plan").value);
   }

   if (document.getElementById("2-year college plan").checked){
      total += parseInt(document.getElementById("2-year college plan").value);
   }

   if (document.getElementById("3-year college plan").checked){
      total += parseInt(document.getElementById("3-year college plan").value);
   }

   // Returns the final amount
   return total;
}