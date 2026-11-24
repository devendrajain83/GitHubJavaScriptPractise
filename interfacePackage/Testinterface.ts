export interface vehicleEngine {
 
    engine():Promise<void>

}

export interface test {

    name: string,
    noOfWheels(wheels:number, tyreName:string):Promise<string>

}

type id= number;

interface department {
 departmentid: id,
 departmentName: string

}

export interface employee extends department {
empId: string,
empname: string,
empAddress: string

}