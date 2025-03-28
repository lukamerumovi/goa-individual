// ask the user to enter 3 numbers, use if else to print the biggest number


let number1 = Number(prompt("enter number"))
let number2 = Number(prompt("enter number"))
let number3 = Number(prompt("enter number"))

if (number1 > number2 && number1 > number3){
    console.log("number1 is the biggest number")
}else if(number2 > number1 && number2 > number3){
    console.log("number 2 is the biggest number")
}else if (number3 > number1 && number3 > number2){
    console.log("number 3 is the biggest number")
}

