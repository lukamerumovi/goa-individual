// ask for a number and print (even or odd), (positive or negative) 
// if a number is 0 print "Zero"

let number = 10

if( number %2 ===0 && number > 0 ){
    console.log("number is even and positive")
}else if (number %2 ===0 && number < 0){
    console.log("number is even and negative")
}else if (number %2 != 0 && number >0){
    console.log("number is odd and positive")
}else if (number %2 !=0 && number <0){
    console.log("number is odd and negative")
}else if (number === 0){
    console.log("Zero")
}