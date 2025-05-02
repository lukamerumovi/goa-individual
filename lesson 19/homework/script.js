let userName = document.getElementById("name-p");
let mainPoint1 = document.getElementById("main-point1");
let mainPoint2 = document.getElementById("main-point2");
let randomPoint1 = document.getElementById("random1");
let randomPoint2 = document.getElementById("random2");
let rollBtn = document.getElementById("roll-btn");
let resetBtn = document.getElementById("reset-btn");

let promptName = prompt("Enter your name : ");
while (promptName == "") {
  alert("enter name");
  promptName = prompt("Enter your name : ");
}
let score1 = 0
let score2 = 0

userName.innerHTML = promptName || "user";
rollBtn.addEventListener("click", function () {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber1, randomNumber2);

  randomPoint1.innerHTML = randomNumber1;
  randomPoint2.innerHTML = randomNumber2;

  if (randomNumber1 > randomNumber2) {
    score1++
    mainPoint1.innerHTML = score1
  } else if (randomNumber2 > randomNumber1) {
    score2++
    mainPoint2.innerHTML = score2
  } else if (randomNumber1 === randomNumber2) {
    alert("a draw");
  }
});

resetBtn.addEventListener("click",function(){
  mainPoint1.innerHTML = "-"
  mainPoint2.innerHTML = "-"

  randomPoint1.innerHTML = 0
  randomPoint2.innerHTML = 0
})