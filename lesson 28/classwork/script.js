function paperwork(n, m) {
  if (n<= 0 || m<=0){
    return 0
  }
   return n * m 
}

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() == "r"){
     return name + " plays banjo" 
    }
    else{
     return name + " does not play banjo" 
    }
  }

  function invert(array) {
  let list = []
  for (let i = 0; i< array.length; i++){
    list.push(array[i] * -1)
  }
  return list
}