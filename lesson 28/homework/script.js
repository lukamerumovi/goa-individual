function grow(x){
 let equal = 1
 for(let i =0; i<x.length; i++){
   equal *= x[i]
 }
  return equal
}


function hero(bullets, dragons){
  return bullets >= dragons *2
}

function countPositivesSumNegatives(input) {
  let positive = 0
  let negative = 0
  let sumNegative = 0
  if(!input||input.length===0){
    return []
  }
  for(let i =0; i<input.length; i++){
    if(input[i] >=1){
      positive ++
    }else if(input[i] <0){
      sumNegative += input[i] 
    }
  }
  return [positive,sumNegative]
  }



  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump
};


var min = function(list){
  return Math.min(...list)
}

var max = function(list){
  return Math.max(...list)
}


function check(a, x) {
  return a.includes(x)
} 

function stringToArray(string){
    return string.split(" ")
}


const reverseSeq = n => {
  let func = []
  for(let i =n;i>=1;i--){  
    func.push(i)
  }
  return func
};