function basicOp(operator,value1,value2){
    if (operator == "+"){
        return value1 + value2}
   else if (operator == "-"){
        return value1 - value2}
  else if (operator == "*"){
        return value1 * value2}
    else if (operator == "/"){
        return value1 / value2}
  }

  return Math.floor(time * 0.5);



function century(year) {
  return Math.ceil(year/100)
}

function maps(x){
  let list = []
  for(let i =0; i< x.length ; i++){
  list.push(x[i]*2)
  }return list
}
