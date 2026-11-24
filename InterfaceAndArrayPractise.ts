import  {employee}  from "./interfacePackage/Testinterface.js";
import data from "./Data.json" with {type: 'json'}
//import {Data} from JSON.parse(JSON.stringify("./Data.json"))
const jsonDataObject=JSON.parse(JSON.stringify(data))
import {ReadOnlyPractise} from "./ReadOnlyPractise.js"

const employeeArray: employee[]=[];

for (const i of jsonDataObject )
{
    employeeArray.push(i)
}


console.log(employeeArray)

export interface student {
    
    readonly collegeName: string,
    readonly studentId: string,
    name: string
    
}

const Student: student= {

    collegeName: "COE Badnera",
    studentId: "stud1",
    name: "Ram"

}

console.log(Student);

const readOnlyPractiseObj= new ReadOnlyPractise(Student.collegeName,Student.studentId,Student.name);

 await ReadOnlyPractise.displayStudentinfo(readOnlyPractiseObj);