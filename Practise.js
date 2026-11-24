console.log("Hello World")


const array1= [];
array1.unshift(1,"hello", 2)
array1.splice(1,1,"world")
console.log(array1)


//  export default function createArray(array2)
// {
//     array2.unshift("orange", "mango")
//     return array2;

// }

//exports= {createArray}

const array3= [1,2,3,4,5,6,7]
console.log(array3[0])
{
    const array3= [5,7,9]
    console.log(array3[0]) 
}
console.log(array3[0])
let array4=array3.slice(1,5)
console.log(array4)
console.log(array3.slice(1))

const employee= {

    name: "raja",
    1: "code",
    age: 45,
    false: 46,
    greet: function() {

        return "Hello "+ employee.name+ " Welcome";
    },
    dept: {
        deptname: "engineering"
    },
    skills: ["java", "pyhton", "playwright"]
}

console.log(employee)
console.log(employee.name+" "+employee[1]+" "+employee[false]+" ",employee.greet())
//employee.greet();

console.log(Object.values(employee))
console.log(Object.entries(employee))
console.log(Object.keys(employee))

console.log(JSON.stringify(employee))

const fruits= ["mango", "orange", "lemon", "watermelon"]

console.log(fruits)
fruits[0]= "chickoo"
console.log(fruits)

console.log(fruits.toString())
console.log("lenght of an array : " +fruits.length)

console.log(fruits.slice(1))
console.log(fruits.slice(0,-2))
fruits.sort()
console.log(fruits)
fruits.reverse();
console.log(fruits)
const num= [10,20,30,40]
num.forEach((n) =>num.push(n*2))
console.log(num)


fruits.forEach((n)=>
{
   fruits.push(n.toUpperCase())

}
       )
console.log(fruits)

const sum= (a,b) => a+b

console.log(sum(5,6))

function addNumbers (a,b,c,d,e)
{
    return a+b
}

console.log(addNumbers(4,5))

const arr2= [10,24,34,40,70]

const arr3=arr2.map((e)=> e*2)
for(let x of arr3)
{
    console.log(x)
}

const arr4=arr2.filter(divideby5)

function divideby5(num)
{
   if (num%5===0)
   {
    return true;
   }
}

console.log(arr4)

console.log(arr2)

const sum2=arr2.reduce(sumofNumbers,0)

//let count=0
//let sum1=0;

function sumofNumbers(number,sum1)
{
    //let count=0;
    // if (count===0)
    // {
    //    sum1=0
    //    count++;
    // }
    // for (let x of number)
    // {
       
    //     sum1= sum1+x
    // }
    sum1= sum1+number
    return sum1;
}

//console.log(sumofNumbers(arr2))
console.log(sum2)

const arr6= [...arr2]
console.log(arr6)
const arr7= [];
arr6.forEach((e)=>arr7.push(e*5))
console.log(arr7)


function calc (a,b,callback)
{
   const operation= callback(a,b)
   console.log(operation)
}

function add(a,b)
{
    return a+b;

}

function multiply(a,b)
{
    return a*b
}

calc(4,5,add)
calc(4,5,multiply)


const arr11= [10,20,30];

const arr12=arr11.map(mapNumbers)

function mapNumbers(num)
{
    let num11= num*10;
    return num11
}
console.log(arr12)


const objPerson= {

    name:"ganesh",
    age: 25,
    getdetails: function() {
          return this.name+" "+this.age;
    }
}

const duplicateobjPersoon= { ...objPerson }
console.log(duplicateobjPersoon)
duplicateobjPersoon.salary= 10000;

console.log(duplicateobjPersoon)
console.log(objPerson.getdetails())

export default function $getdetails() {

    console.log("Hello")
}

//$getdetails()