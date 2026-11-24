
interface State {

    name: string,
    capital: string,
    population: number
}

const stateArray: State[]= [{name: "Maharashtra", capital: "Mumbai", population: 10000000},
    {name: "Delhi", capital: "New Delhi", population: 2000000},
    {name: "Assam", capital: "Dispur", population: 5000000},
    {name: "Telangana", capital: "Hyderababd", population: 20000000}
]


const stateArrayMapped= stateArray.map(e=> e.capital.concat(" India"))

console.log(stateArrayMapped)

const population= stateArray.reduce((population:number,e)=> population+e.population,stateArray[0].population)

console.log(population)

stateArray.sort((a,b)=> (a.population<b.population)?-1:(a.population>b.population)?1:0);
console.log(stateArray)

const boolval=stateArray.some(a=> a.capital.startsWith("m"))

console.log(boolval)