import {vehicleEngine,test as wheel} from "./interfacePackage/Testinterface.js"

 export type msg= string;


 export  default class CarWithDieselEngine implements vehicleEngine, wheel {
      
     name:string= "";

     async engine():Promise<void>
   {
        console.log(" Diesel Engine Implementation")
   }

  
   async carDieselEngineDisplay(message: msg): Promise<msg>
   {
        return message;
   }

   async noOfWheels(wheels:number, tyreName:string): Promise<string>
   {
      this.name =tyreName
      return `number of wheels in the car are ${wheels} and tyre is ${this.name}`
   }


}