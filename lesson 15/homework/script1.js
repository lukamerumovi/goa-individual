function Bmw(name,model,year,sheswavla){
    this.name= name
    this.model=model
    this.year=year
    this.sheswavla=sheswavla
    this.study= function(){
        console.log("manqnis saxeli" + this.name + "modeli" + this.model + 2020 + this.year)
    }
}
let car = new Bmw("bmw", "m5",2020)
car.study()

car.year = 2023
delete car.model