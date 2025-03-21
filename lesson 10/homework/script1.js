let form = document.getElementById("form");
let email = form.elements.email;
let password = form.elements.password;

function registrationForm(){
    if(email.value == "merumovi@gmail.com" && password.value == "merumovi"){
        alert("succesful login")
    }else{
        alert("invalid")
    }
}