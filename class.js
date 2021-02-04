class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "Adorsho Model School";  
    }
}
const student1 = new Student(12,"Shuvo");
const student2 = new Student(22,"Mahi");
console.log(student1,student2);
