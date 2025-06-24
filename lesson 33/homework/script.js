// animation of a rectangle

// let bottom = 0
// let right = 0
// let top = 0
// let left = 0

// let box2 = document.getElementById("box2")
// let seconds = setInterval(circle,10)

// function circle(){
//     if (bottom >= 250){
//         if(right >=250){
//             if(top >=250){
//                 if(left >=250){
//                     clearInterval()
//                 }else if(){
//                     bottom +=1
//                     box2.style.bottom = seconds + "px"
//                 }else if(){
//                     right +=1
//                     box2.style.right = right + "px"
//                 }else if(){
//                     top += 1
//                     box2.style.top = top + "px"
//                 }else{
//                     left +=1
//                     box2.style.left=left + "px"
//                 }
//             }
//         }
//     }
// }










let bottom = 0
let right = 0
let top = 0
let left = 0

let direction = "down"

let box2 = document.getElementById("box2")
let seconds = setInterval(circle,10)

function circle(){
    if(direction == "down"){
        if(bottom >= 300){
            clearInterval()
        }else{
            bottom+=1
            box2.style.top = bottom+"px"
        }
    }
}
















// move a box right
// let box2 = document.getElementById("box2");
// let asd = 0;
// let interval = setInterval(circle, 10);

// function circle() {
//   if (asd >= 250) {
//     clearInterval(interval);
//   } else {
//     asd += 1;
//     box2.style.right = asd + "px";
//   }
// }














