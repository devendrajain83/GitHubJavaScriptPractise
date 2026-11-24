import * as importfunc from "./ExportFunction.js"


importfunc.display();
importfunc.test();

const arr= [1,2,3,2,1,4]
const set= new Set([...arr])
console.log(set)

const set1= new Set([1,2,3,4,2,1])
console.log(set1)

const arr2= [5,6,7,8,4,7] 

const arrslice =arr2.slice(-5,-1)

console.log(arrslice)

const[num1,num2,num3,num4,num5,num6]= arr2;
console.log(num1+" "+num2)

console.log("Javascript".padEnd(20, "de"))

function sumNumbers (a1,a2,...a3)
{
    console.log(a3)
    return a1+a2+a3[0]+a3[1]+a3[2]+a3[3]
}

console.log(sumNumbers(10,20,30,40,50,60,90))



function muliplyofNumbers(a1,a2,a3,a4)
{
    return a1*a2*a3*a4
}

const arr5= [2,3,4]

console.log(muliplyofNumbers(1,...arr5))

const user= {

    firstName: "kapil",
    age: 35,
    gender: "male"
}

const {firstName, age,gender, city="LA"}= user
console.log(user)
console.log(firstName+" "+age+" " +gender+" "+city)

function details({firstName, age, gender})
{
    return firstName+age+gender
}

console.log(details(user))