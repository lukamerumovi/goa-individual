let image = document.getElementsByClassName("photo")
let div2 = document.getElementById("photo-2-div")
let userPhoto = document.getElementById("user-photo")
let botPhoto = document.getElementById("bot-photo")

let arr = ["paper.webp","rock.avif", "scrissors.jpg" ]

for( let i=0; i<image.length; i++ ){
    image[i].addEventListener("click",function(){
        div2.style.display="flex"
        userPhoto.src= image[i].src
        let randomImg = arr[Math.floor(Math.random() * arr.length)];
        botPhoto.src = randomImg
        let userChoice = userPhoto.src.split("/").pop();
        let botChoice = botPhoto.src.split("/").pop();
        if(userChoice == botChoice){
            alert("frea")
        }else if(userChoice == "paper.webp" && botChoice == "rock.avif" || userChoice == "scrissors.jpg" && botChoice == "paper.webp" || userChoice == "rock.avif" && botChoice == "scrissors.jpg" ){
            alert("user won")
        }else{
            alert("bot won")
        }
    })
}   














