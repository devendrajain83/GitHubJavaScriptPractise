const str51: string= "JavaScript_% is+ a@ 123programming language . it_ is a 45dynamic lang129uage  and lang123 90la45";

const alphaNumericRegExp=/(?=[0-9]+[a-zA-Z]+|[a-zA-z]+[0-9]+([a-zA-Z]+)?)[a-zA-Z0-9]+/g



console.log(str51.match(alphaNumericRegExp))


const fruits: string[]= ["apple", "banana", "AppleGourd", "beatroot", "Pappaya"];

async function destructuringwithRestAndSpreadOperator(...a:string[]):Promise<string[]> {

     const samplefruits:string[]= [];
     for(const i of a)
     {
        samplefruits.push(i)
     }

     return samplefruits;


}



const samplefruits=await destructuringwithRestAndSpreadOperator(...fruits)

console.log(samplefruits)

const fruitsArrayWithVowels=samplefruits.filter(e=> /^[aeiouAEIOU]/.test(e))

console.log(fruitsArrayWithVowels)

samplefruits.sort((a:string,b:string)=> (b>a)?-1:(b<a)?1:0);
console.log(samplefruits)

