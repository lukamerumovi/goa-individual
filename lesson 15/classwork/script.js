// შექმენი ორი ცალი ობიექტი მერსედესზე და ბეენვეზე.ბეენვზე შემქენი ჩვაულებრივად,მერსედესი კი კონსტრუქტორით.ორივეს მიეცი მეთოდი სახელად დაქოქვა.
// სადაც მისი გაშვების მომენტში კონსოლში გამოიტანს რომ მანქანა იქოქება



let bmw = {
    name: "bmw",
    model: "x5",
    color: "dark",
    startEngine: function(){
        console.log("dzravi gaeshva")
    }
}

bmw.name = "BMW"
bmw.model = "X6"
bmw.engine= "3.0"
delete bmw.color
console.log(bmw)



function Mercedes(name,model,color,sheswavla){
    this.name= name
    this.model=model
    this.color=color
    this.sheswavla=sheswavla
    this.sheswavla= function(){
        console.log("manqnis saxeli" + this.name + "manqnis modeli" + this.model + "manqnis feri" + this.color)
    }
}
let car = new Mercedes("mercedes", "gclass","black")
car.sheswavla()


// შექმენილი ობიექტიდან შეცვლლე,დაამატე,წაშალა კუთვნილებები
car.color = "dark"
delete car.model
console.log(car)