const prodPrices: number[]= [300, 250,700,150, 500];

const discountedProdPrices= prodPrices.map(e=>e*0.9);

console.log(discountedProdPrices)

const totalPrice=discountedProdPrices.filter(e=>e<=300).reduce((totalPrice, price)=> totalPrice+price, 0)

console.log(`total price of all the prodcut below 300 rs is ${totalPrice}`);

type prodId= number;

interface Product{

    name: string,
    readonly id: prodId,
    price: number

}

const prodArray: Product[]= [{name: "Refregierator", id: 1001, price: 15000 },
    {name: "AC", id: 1002, price: 25000 },{name: "TV", id: 1003, price: 18000 },
    {name: "Microwave", id: 1004, price: 10000 },
    {name: "Gyeser", id: 1005, price: 12000 }
]



prodArray.sort((a:Product,b:Product)=> b.price-a.price)

console.log(prodArray)

/*prodArray.sort((a:Product,b:Product)=>{

    if (a.name<b.name)
    {
        return -1;
    }
    else if (a.name>b.name)
    {
        return 1;
    }
    else{
        return 0;
    }
});*/

prodArray.sort((a:Product,b:Product)=> (a.name<b.name)?1:(a.name>b.name)? -1:0)

console.log(prodArray)


const minPrice=prodArray.reduce((min, prod)=> {
    if (min< prod.price){

        return min ;
    } 
    else
      {
           return   prod.price
        } 
    }
, prodArray[0].price)

console.log(minPrice)

const sampleArray: number[]= [10,7,8,20,38,6]

if(sampleArray.includes(20))
{
    console.log ("number is present")
}

const prodDetails= {name: "Microwave", id: 1004, price: 10000 };


function isPresent(prod:Product[],prodDetails: Product): boolean {

     if (prod.some((e)=> e.name===prodDetails.name && e.id===prodDetails.id && e.price===prodDetails.price))
     {
        return true;
     }
     else 
     {
        return false;
     }


}

const booleanvalue= isPresent(prodArray, prodDetails)
console.log(booleanvalue)

const fruits: string[]= ["apple", "banana", "pineapple", "chickoo","mango"];

const [a,b,...arr]= fruits;
console.log (a)
console.log(arr)

function destructuringwithRestOperator(...arr: string[]): void {

    console.log(" array elements are " +arr)
  
}

destructuringwithRestOperator("hi", "hello")

function destructuringwithRestAndSpreadOperator(...a:string[]):void {

     console.log(" array elements are " +a[0]+" "+a[1]);
}

hobbies:[]

destructuringwithRestAndSpreadOperator(...fruits)

console.log(fruits)

fruits.splice(0,2, "custard apple", "Black Pulp", "Bael Fruit")
console.log(fruits)


const vegetables: string[]= ["Spinach", "Bitter Gourd", "Bottle Gourd", "FenuGreek"];

const slicedVegetable= vegetables.slice(1,3)

console.log(slicedVegetable)



