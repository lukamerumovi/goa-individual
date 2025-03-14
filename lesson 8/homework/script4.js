let userInput = Number(prompt("Please input any value"))

if (Number.isNaN(userInput)) {
    console.log("Not a number");
} else if (Number.isInteger(userInput) && userInput % 2 === 0) {
    console.log("Even number entered");
} else if (Number.isInteger(userInput) && userInput % 2 !== 0) {
    console.log("Odd number entered");
} else {
    console.log("It's a number but not an integer")
}