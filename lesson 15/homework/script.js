function Student(name,age,level,stud){
    this.name= name
    this.age=age
    this.level=level
    this.stud=stud
    this.stud= function(){
        console.log("gio" + this.name + 18 + this.age + 20 + this.level)
    }
}
let object = new Student("gio", 18, 20)
student.stud()

function Student(name,agee,level,stud){
    this.name= name
    this.agee=agee
    this.level=level
    this.stud=stud
    this.stud= function(){
        console.log("mari" + this.name + 19 + this.agee + 18 + this.level)
    }
}
let objects = new Student("mari", 19,18)
student.stud()


object.level = 22
delete object.age