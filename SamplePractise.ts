import Department from "./Department.js"
import Student from "./Student.js"
import {envCredentials,envFile} from "./readEnvFile.js"

const departmentEXTC= new Department("dept01", "EXTC");
const departmentMech= new Department("dept02", "Mechanical");

const stud1= new Student(departmentEXTC,"Ram",1,"12/12/2005")
const stud2= new Student(departmentEXTC,"Kapil",2,"10/9/2006")
const stud3= new Student(departmentMech,"Shyam",1,"10/9/2005")
const stud4= new Student(departmentMech,"Ghanshyam",2,"2/7/2005")
const stud5= new Student(departmentMech,"Amit",3,"2/7/2005")

//console.log(stud1)
const studentArray:Student[]= [stud1,stud2,stud3,stud4,stud5];

//studentArray.sort((s1,s2)=> (s1.department.deptName>s2.department.deptName)?-1:(s1.department.deptName<s2.department.deptName)?1:0)

//console.log(studentArray)

studentArray.sort((s1,s2)=>
    { 
        return new Date(s1.dob).getTime()- new Date(s2.dob).getTime() || s2.name.localeCompare(s1.name)
    
    });

console.log(studentArray)

const animalArray: string[]= ["Elephant", "Python", "Lizard", "Deer", "Dear", "Bear"]

animalArray.sort().reverse();
console.log(animalArray)

//12-12-2005

const stud6= new Student(departmentEXTC,"Ram",1,"12/12/2005")
const stud7=new Student(departmentEXTC,"Kapil",2,"10/9/2006")
const stud8= new Student(departmentMech,"Shyam",1,"10/9/2005")
const stud9= new Student(departmentMech,"Ghanshyam",2,"2/7/2005")
const stud10= new Student(departmentMech,"Amit",3,"2/7/2005")

const newStudentArray: Student[]= [stud6,stud7,stud8,stud9,stud10];



async function getDateArray(newStudentArray:Student[]): Promise<void>
{
for(const stud of newStudentArray){

const dateRegExp=/(\d{1,2})\/(\d{1,2})\/(\d{4})/;    
let datearr= dateRegExp.exec(stud.dob)

if(datearr)
{
    console.log(datearr[1] +" "+datearr[2]+" "+datearr[3])

}
}
}

await getDateArray(newStudentArray);


const str: string[]= ["123abc", "apple", "abc_456d", "pineapple", "efg12", "789", "3a"]


//123abc
const alphanumericRegexp= /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9_]+$/;

for (const x of str)
{
    console.log(`${x} is alphanumeric string ` +alphanumericRegexp.test(x));
}

//"efg12"

//7890
  

console.log(/\d+/.test("7890"));

//1. Must pass lookahead checks (e.g., contains at least one number).
//2. Must match the structure: [Department Code]_[Student Name][Roll Number] (e.g., EXTC_Ram12).

const matchArray=/(?=.*\d)(\w+)_([a-zA-Z]+)(\d+)/.exec("EXTC_Ram12")

if(matchArray)
{
    console.log(`dept coe is ${matchArray[1]} student name is ${matchArray[2]} and roll number is ${matchArray[3]}`)


}

// console.log(`reading environment variable from ${envFile} file, userName as  ${envCredentials.username} and password as ${envCredentials.password}`);


const colors: string[]= ["red", "orange", "blue", "white"]
let removedArray=colors.splice(1,1,"violet", "green")
console.log(colors)
console.log(removedArray)
removedArray=colors.splice(-2);
console.log(colors)
console.log(removedArray)


const numArray: number[]= [10,20,30,40,50]
const newnumArray=numArray.slice(1,3)
console.log(`numArray is ${numArray}`)
console.log(newnumArray)
const newnumArray1=numArray.slice(1)
console.log(newnumArray1)
const newnumArray2=numArray.slice(1,-3)
console.log(newnumArray2)
const newnumArray3=numArray.slice(-2)
console.log(newnumArray3)
const newnumArray4=numArray.slice()
console.log(newnumArray4)


const studentArray123:Student[]= [stud1,stud2,stud3,stud4,stud5];

console.log(`student array is ${studentArray123}`)