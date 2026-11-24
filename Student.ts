import Department from "./Department.js"
export default class Student {

    department:Department;
    name: string;
    static collegename:string= "COE Badnera";
    rollno: number;
    dob: string;

    constructor(department:Department,name: string,rollno: number,dob: string)
    {
        this.department=department;
        this.name= name;
        this.rollno= rollno;
        this.dob= dob;

    }

    toString():string {

        return this.department+" "+this.name+" "+this.rollno+" "+this.dob;

    }
    
    static display(student1:Student)
    {
       console.log(this.collegename+" "+student1.name)
    }



}

Student.display(new Student(new Department("dept01", "EXTC"),"Ram",1,"12/12/2005"));