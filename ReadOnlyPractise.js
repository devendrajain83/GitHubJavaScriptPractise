export class ReadOnlyPractise {
    collegeName;
    studentId;
    name;
    constructor(collegeName, studentId, name, age) {
        this.collegeName = collegeName;
        this.studentId = studentId;
        this.name = name;
    }
    static async displayStudentinfo(readOnlyPractiseObj) {
        console.log(`Student information is ${readOnlyPractiseObj.collegeName}, ${readOnlyPractiseObj.studentId}, ${readOnlyPractiseObj.name}`);
    }
}
