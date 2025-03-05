// Homework 1: Simple Contact Form

// Objective: Create a contact form using HTML and retrieve the values using JavaScript.
// Requirements:
// 1. Create a form with the following fields:
//     *   Name ( name="userName" )
//     *   Email ( name="userEmail" )
//     *   Message ( name="userMessage" )
// 2. Add a Submit button.
// 3. Use JavaScript to log the values of each input field to the console when the button is clicked.

// Hints:

// * Use document.getElementById() to select the form.
// * Access values using form.elements.<↓>.value.


function writeInformation(){
    let st = document.getElementById("st")
    let nd = document.getElementById("nd")
    let sd = document.getElementById("sd")
    console.log(st.value)
    console.log(nd.value)
    console.log(sd.value)
}