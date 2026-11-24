/*const arrnumbers:number[]= [];
arrnumbers.push(12);
arrnumbers.push(7);
arrnumbers.push(15);
arrnumbers.unshift(30)
arrnumbers.push(11,2)


console.log(arrnumbers)

const [a,b,c]= [...arrnumbers]


 const num= function(...arr1:number[]): number {

    return arr1[0] +arr1[1]+ arr1[2]

}

console.log(num(...arrnumbers));


function returnCountry(country:String): String {

    return country;
}

const greetings= (...rest:String[]): String=>{

    return rest[0]+" "+ rest[1]+" "+rest[2]
}

const msg=greetings("Hello", "Welcome", `To ${returnCountry("EngLand")}` )
console.log(msg)

const tuple1: [number,number,number] = [10,20,30]

const sum= (a:number, b:number, c:number):number=>{

    return a+b+c;

}

console.log(sum(...tuple1))

const tuple2: [String, number, String]= ["Hello", 7, "Hi"];

console.log(tuple2)
tuple2.push(15, "Devendra");
console.log(tuple2)
tuple2.unshift("Hi")
console.log(tuple2)

const arraynum: number[]= [13,28,7,91,5,100,151,64,33]


/*function getMaxValue(arr:number[]): number{

       let max= 0;
       for(let i of arr)
       {
        //console.log(`value at index ${i} is ${arr[i]}`)
        if (i>max)
        {
            //console.log(`value ${arr[i]}`)
            max= i
            console.log(`temporary value of max is ${max}`);

        }
       }
       return max;

}
 
console.log ("maximum value of array is :" +getMaxValue(arraynum))*/
const employeeArray = [
    { firstName: "Anmol", lastName: "Jain", age: 28, city: "Pune", deptInfo: {
            deptName: "Testing",
            deptId: 2
        }
    },
    { firstName: "Ram", lastName: "Sharma", age: 33, city: "Pune", deptInfo: {
            deptName: "Engineering",
            deptId: 1
        }
    },
    { firstName: "bharat", lastName: "Shrivastav", age: 30, city: "Mumbai", deptInfo: {
            deptName: "Testing",
            deptId: 2
        }
    },
    { firstName: "ankur", lastName: "Garg", age: 35, city: "Pune", deptInfo: {
            deptName: "Testing",
            deptId: 2
        }
    },
    { firstName: "kalpesh", lastName: "Agrawal", age: 25, city: "Mumbai", deptInfo: {
            deptName: "Engineering",
            deptId: 1
        }
    }
];
//console.log(employeeArray)
//const newemployeeArray=employeeArray.filter((e)=> e.city==="Mumbai").map((e)=>e.firstName.toUpperCase()+" "+e.lastName.toUpperCase());
//const empArrayCity= newemployeeArray.map((emp)=>emp.city.replace("Mumbai", "Banglore"));
//console.log(newemployeeArray)
//console.log(empArrayCity)
/*const employeeArray1=employeeArray.filter((e)=> e.deptInfo.deptName==="Testing")
.sort((a,b)=> (a.firstName<b.firstName)?-1:(a.firstName>b.firstName)?1:0)
//.map((e)=> e.city);

console.log(employeeArray1)*/
//map((e)=>e.firstName.toUpperCase()+" "+e.lastName.toUpperCase());
const intArray = [10, 20, 30];
let i;
let num = 25;
// for(i=0; i<intArray.length; i++)
// {
//    intArray[i]= num;
//    num++;
// }
for (let x of intArray)
    console.log(x);
intArray.forEach((ele) => ele);
console.log(intArray);
const stringArray = [];
stringArray.push("devendra");
stringArray.push("Kailash");
stringArray.push("Arnav");
//console.log(stringArray)
stringArray.forEach(e => e.toUpperCase()); // For Each loop doesn change the original array and alos do not return new array
console.log(stringArray); // original array will be printed.
let str = "Devendra Jain";
for (let x of str) {
    console.log(x);
}
console.log(typeof stringArray);
let num1 = 35;
let str1 = String(num1);
console.log(String(num1));
console.log(typeof str1);
const numstringArray5 = [];
let len = numstringArray5.push("Alex", "Jack");
console.log(`length of array ${numstringArray5} is: ${len}`);
numstringArray5.push(10, 15, "dev");
console.log(numstringArray5);
console.log(numstringArray5.pop());
console.log(numstringArray5);
numstringArray5.unshift(30, "Levis");
console.log(numstringArray5);
let removedelement = numstringArray5.shift();
console.log(removedelement);
console.log(numstringArray5);
const animals = ["cat", "dog", "sparrow", "elephant", "lion"];
animals.splice(1, 2, "bear", "deer");
console.log(animals);
animals.splice(1, 0, "tiger");
console.log(animals);
const numarray7 = [1, 2, 3, 4, 5, 3];
const numarray8 = numarray7.slice(1, 4);
console.log(numarray8);
const numarray9 = numarray7.slice(1);
console.log(numarray9);
const numarray10 = numarray7.slice();
console.log(numarray10);
const numarray11 = numarray7.slice(-3);
console.log(numarray11);
console.log(numarray7.indexOf(3, numarray7.indexOf(3) + 1));
console.log(numarray7.lastIndexOf(3));
const stringArrayNew = ["Administrator", "User", "editor", "Moderator"];
const userrole = "Administrator";
console.log(stringArrayNew.includes(userrole));
export {};
//# sourceMappingURL=Arrays.js.map