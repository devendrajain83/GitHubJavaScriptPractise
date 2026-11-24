const names = ["Ram", "Rahul", "Raman", "Raj"];
const flag = names.every(name => name.startsWith("RA"));
console.log(flag);
const arrayObj = [{ name: "Aakash", age: 30, location: "Pune" }, { name: "Anmol", age: 28, location: "Pune" },
    { name: "Bharat", age: 23, location: "Mumbai" }, { name: "Umesh", age: 35, location: "Mumbai" },
    { name: "Kapil", age: 38, location: "Pune" }
];
//{name:string,age: ageofEmployee,location: string}
//let maxage: ageofEmployee= 0;
/*function getMaxAgeEmployee(acc: Employee, curr: Employee): Employee {

       if (curr.age> acc.age)
       {
         return curr;
       }

   else
    {
        return acc;
    }

}*/
//const mage=getMaxAgeEmployee([{ name: "Aakash",age: 30, location: "Pune" }])
//console.log("max age from function is : " +mage)
/*const maximumage=arrayObj.reduce(getMaxAgeEmployee);
console.log(maximumage);*/
const maximumage = arrayObj.reduce((maxage, obj) => {
    if (obj.age > maxage) {
        return obj.age;
    }
    else {
        return maxage;
    }
}, arrayObj[0].age);
console.log(`maximum age of employee in company is ${maximumage}`);
export {};
//# sourceMappingURL=ArrayMethod1.js.map