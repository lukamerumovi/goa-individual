function writeInformation(){
    let name = document.getElementById ("name").value
    let lastname = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let p = document.getElementById("p")
    p.textContent = "Welcome back" + name + lastname + email + password

}