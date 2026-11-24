export {}

type idtype= string;

interface employee {
    
    readonly id: idtype,
    name: string,
    age: number,

}

const employeeObj: employee={
    id: "emp001",
    name: "dev",
    age: 40
}


const {id,name:empName,age}= employeeObj

console.log(id+" "+empName)


const worker= {

    ...employeeObj,
    salary: 15000
}

console.log(worker)

 interface vehicleType {

name: string,
model: string,
type?: string,
mode: ()=> void



}


 const vehicle: vehicleType= {

    name: "Grandi10",
    model: "Hyundai",
    mode: ()=> console.log(`car details are ${vehicle.name} ${vehicle.model}`)

}


vehicle.mode()

export interface automobile {

    noOfWheels: number,
    display():void;
}