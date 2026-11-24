import data from "./Data.json" with { type: 'json' };
//import {Data} from JSON.parse(JSON.stringify("./Data.json"))
const jsonDataObject = JSON.parse(JSON.stringify(data));
import { ReadOnlyPractise } from "./ReadOnlyPractise.js";
const employeeArray = [];
for (const i of jsonDataObject) {
    employeeArray.push(i);
}
console.log(employeeArray);
const Student = {
    collegeName: "COE Badnera",
    studentId: "stud1",
    name: "Ram"
};
console.log(Student);
const readOnlyPractiseObj = new ReadOnlyPractise(Student.collegeName, Student.studentId, Student.name);
await ReadOnlyPractise.displayStudentinfo(readOnlyPractiseObj);
