export default class Student {
    department;
    name;
    static collegename = "COE Badnera";
    rollno;
    dob;
    constructor(department, name, rollno, dob) {
        this.department = department;
        this.name = name;
        this.rollno = rollno;
        this.dob = dob;
    }
    toString() {
        return this.department + " " + this.name + " " + this.rollno + " " + this.dob;
    }
}
