// create a paragraph with an ID
// use js to cahnge its the text content afther the page loads

let mic = document.getElementById("me")
mic.textContent="voice"

// Add a button
// When its clicked, change the background color of the body.

let button = document.getElementById("btn")
document.body.style.backgroundColor = "green"

// create a paragraph and a button
// when the button is clicked hide/show the paragraph
let paragraph = document.getElementById("post")
let butt = document.getElementById("buTon")

let hide = false

butt.addEventListener('click',function(){
  if(!hide){
    paragraph.style.display = "none"
    hide = true
  }else if(hide){
    paragraph.style.display = "block"
    hide = false
  }
})

// Add a text input and an empty <h2>
// when the user types something and clicks a button
// display the input text in the heading!!!???

let input = document.getElementById("theInput")
let btn = document.getElementById("theButton")
let h = document.getElementById("theH")

// create 3 paragraph with the same class
// when button is clicked change the text color of all those paragraphs

document.getElementById("theB")
document.getElementsByClassName("theP").style.color= "red"

// add a text input and a button 
// when the button is clicked add the input value as a new list item to a <ul>.
document.getElementById("aButton")
let inp = document.getElementById("theInput").value

// create a list of items.
// when any item is clicked remove it from the list
document.getElementsByClassName("sameId")
