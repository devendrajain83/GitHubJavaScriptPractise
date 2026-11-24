class Student123 {


    name;
    rollno;
    dob;

    constructor(name,rollno,dob)
    {

        this.name= name;
        this.rollno= rollno;
        this.dob= dob;

    }

    toString()
    {
     return `${this.name} ${this.dob} ${this.rollno}`;
    }

}

const stud1= new Student123("Arnav", 10,"2/7/1989")
const stud2= new Student123("Payal", 11,"2/7/1989")

const studArray= [stud1,stud2]
console.log(`list of students are ${studArray}`);