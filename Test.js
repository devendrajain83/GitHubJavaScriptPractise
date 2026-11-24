//import createArray from "./Practise.js"
//import $getdetails from "./Practise.js"


// const arr=[];
// let arr1= createArray(arr)
// console.log(arr1)



//$getdetails();

const arrnumbers= [];
arrnumbers.push(12);
arrnumbers.push(7);
arrnumbers.push(15);
arrnumbers.unshift(30)
arrnumbers.push(11,2)


console.log(arrnumbers)

const [a,b,c]= [...arrnumbers]


 const num= function(a,b,c){
    return a+b+c

}

console.log(num(...arrnumbers));

const msg= (...arrString)=>{

   return arrString[0] +" " +arrString[1];

}

let country="India"
console.log(msg("Hello"," Welcome", ` to ${country}`))


const arraynum= [13,28,7,91,5,100,151,64,33]


function getMaxValue(arr){

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

console.log ("maximum value of array is :" +getMaxValue(arraynum))

//console.log ("maximum value of array is :" +arraynum.reduce(getMaxValue, 0));


const products= [{name: 'Apple', category: "Fruit"},
    {name: 'Carrot', category: "Vegetable"},
    {name: 'Banana', category: "Fruit"},
    {name: 'Raddish', category: "Vegetable"}
];

 /*const fruits =products.reduce((fruit, product)=>{

    if (product.category==="Fruit")
    {
        fruit.push(product.name)

    }
    return fruit;

}, [])

console.log(fruits);*/

const obj1= {

    name: []

}

const fruitsobj= products.reduce((fruit, product)=> {
    
 
    if (product.category==="Fruit")
    {
            
            fruit.name.push(product.name)
            fruit.category=product.category
    }
   
   return fruit;

},{name:[]});

console.log(fruitsobj)
const obj={hobbies:[]};

obj.name= "Ram";
obj.id= 101;

obj.hobbies.push("Singing")
obj.hobbies.push("Cricket")
console.log(obj)

const individual= {
     
    name: "Shyam",
    age: 37

}


getObject(individual)


function getObject(person)
{
    console.log(person.name+" "+ person.age)
}

