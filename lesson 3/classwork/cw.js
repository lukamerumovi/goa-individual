function changeColorAndText(){
    let btn = document.getElementById("btn")
    let goa = document.getElementById("goa")
    // შევუცვალე properties btn ღილაკს
    btn.style.color = "green"
    btn.style.backgroundColor = "red"
    btn.textContent = "GOA"
    // შევუცვალე properties p ელემენტს
    goa.style.color = "purple"
    goa.style.backgroundColor = "grey"
    goa.textContent = "MHM"
}