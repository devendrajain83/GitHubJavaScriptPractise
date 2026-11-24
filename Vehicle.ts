import CarWithPretorlEngines from "./CarWithPretorlEngine.js";
import CarWithDieselEngine,{msg} from "./CarWithDieselEngine.js";

import  {vehicleEngine}  from "./interfacePackage/Testinterface.js";


class Vehicle {

async getCarengineDetails(engineobj:vehicleEngine): Promise<void>
{
    engineobj.engine();
}
     


}

const carPetrolObj= new CarWithPretorlEngines();
const vehicleObj= new Vehicle();
const carDeiselObj= new CarWithDieselEngine()

vehicleObj.getCarengineDetails(carDeiselObj);

const message:msg=await carDeiselObj.carDieselEngineDisplay("Hello World");
console.log(message)
console.log(await carDeiselObj.noOfWheels(4,"ceat"));