let random = Math.floor(Math.random()*50)+1
let number = 0
while(random != number){
    random=prompt("guess the number")
}if(random < number){
    alert("thats low")
}else if(random > number){
    alert("thats high")
}else{
    alert("u did it")
}