import CarWithPretorlEngines from "./CarWithPretorlEngine.js";
import CarWithDieselEngine from "./CarWithDieselEngine.js";
class Vehicle {
    async getCarengineDetails(engineobj) {
        engineobj.engine();
    }
}
const carPetrolObj = new CarWithPretorlEngines();
const vehicleObj = new Vehicle();
const carDeiselObj = new CarWithDieselEngine();
vehicleObj.getCarengineDetails(carDeiselObj);
const message = await carDeiselObj.carDieselEngineDisplay("Hello World");
console.log(message);
console.log(await carDeiselObj.noOfWheels(4, "ceat"));
//# sourceMappingURL=Vehicle.js.map