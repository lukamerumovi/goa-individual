// let registreForm = document.getElementById("registre");
// let loginForm = document.getElementById("login");

// let registreUser = registreForm.elements.username;
// let registreEmail = registreForm.elements.email;
// let registreAge = registreForm.elements.age;
// let registrePass = registreForm.elements.password;

// let loginEmail = loginForm.elements.loginemail
// let loginPass = loginForm.elements.loginPassword

// let newEmail = "";
// let newPass = "";

// function register() {
//   if (
//     registreUser.value === "" ||
//     registreEmail.value === "" ||
//     registreAge.value === "" ||
//     registrePass.value === ""
//   ) {
//     alert("Please don't leave any field blank.");
//   } else {
//     alert("You are registered!");

//     let newEmail = registreEmail.value;
//     let newPass = registrePass.value;

//     registreUser.value = "";
//     registreEmail.value = "";
//     registreAge.value = "";
//     registrePass.value = "";
//   }
// }

// function Login() {
//     if (loginEmail.value != newEmail & loginPass.value != newPass) {
//       alert("the email or password is not coorect!");
//     } else if (loginEmail.value == newEmail && loginPass.value == newPass) {
//       alert("you logined");
//     }
//   }


let registreForm = document.getElementById("registre");
let loginForm = document.getElementById("login");

let registreUser = registreForm.elements.username;
let registreEmail = registreForm.elements.email;
let registreAge = registreForm.elements.age;
let registrePass = registreForm.elements.password;

let loginEmail = loginForm.elements.loginemail;
let loginPass = loginForm.elements.loginPassword;

let newEmail = ""; 
let newPass = "";   

function register() {
  if (
    registreUser.value === "" ||
    registreEmail.value === "" ||
    registreAge.value === "" ||
    registrePass.value === ""
  ) {
    alert("Please don't leave any field blank.");
  } else {
    alert("You are registered!");

    newEmail = registreEmail.value;  
    newPass = registrePass.value;    

    registreUser.value = "";
    registreEmail.value = "";
    registreAge.value = "";
    registrePass.value = "";
  }
}

function Login() {
  if (loginEmail.value !== newEmail || loginPass.value !== newPass) {
    alert("The email or password is incorrect!");
  } else {
    alert("You logged in!");
  }
}