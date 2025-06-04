function maps(x){
  let list = []
  for(let i =0; i< x.length ; i++){
  list.push(x[i]*2)
  }return list
}


function sum (numbers) {
  let sum = 0
  if(numbers.length ==0){
    return 0
  }for (let i =0; i < numbers.length; i++){
    sum += numbers[i]
  } return sum
}

function makeUpperCase(str) {
  return str.toUpperCase()
}