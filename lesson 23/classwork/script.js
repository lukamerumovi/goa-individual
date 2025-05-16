// 1

function findSmallestInt(arr) {
return Math.min(...arr)  
}

// 2

function squareSum(numbers){
    let sum = 0
    for (let i =0; i < numbers.length ; i++){
        sum += numbers[i] ** 2
    }return sum
}

// 3

function noSpace(x){
  let sum = x.replace(/\s+/g, "")
return sum 
}

// 4
function doubleInteger(i) {
  return i * 2;
}


// 5
function greet(name){
  return "Hello, " + name + " how are you doing today?"
}