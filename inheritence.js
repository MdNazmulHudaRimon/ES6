class Parent{
    constructor(){
        this.fatherName =  "Nasir Uddin";
        this.motherName = "Sokina Khatun";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child("Rimon");
const baby2 = new Child("Rifat");
console.log(baby,baby2);