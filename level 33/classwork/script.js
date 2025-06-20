// შექმენით ინტერვალი, რომელიც ყოველ 5 წამში ერთხელ კონსოლში დაბეჭდავს თქვენს სახელს. ეს ინტერვალი შეინახეთ ცვლადში.
// მას შემდეგ, რაც თქვენი ინტერვალი განმეორდება 4-ჯერ, გააუქმეთ ის.


// let count = 0
// let name = setInterval(function(){
//     console.log("luka")
//     count += 1
//     if(count == 4){
//     clearInterval(name)
//     }
// },5000)




// Display the current time in the console every second, and stop after 15 seconds.

let count = 0
let interval =setInterval(function(){
    let date = new Date()
    console.log(date.toLocaleTimeString())
    if(count >= 15){
        clearInterval(interval)
        count ++
    }
})