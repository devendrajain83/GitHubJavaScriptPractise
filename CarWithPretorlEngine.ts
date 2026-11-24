import  {vehicleEngine}  from "./interfacePackage/Testinterface.js"

export  default class CarWithPretorlEngine implements vehicleEngine {

   async engine():Promise<void>
   {
        console.log(" Petrol Engine Implementation")
   }

}

