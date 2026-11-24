export default class CarWithDieselEngine {
    name = "";
    async engine() {
        console.log(" Diesel Engine Implementation");
    }
    async carDieselEngineDisplay(message) {
        return message;
    }
    async noOfWheels(wheels, tyreName) {
        this.name = tyreName;
        return `number of wheels in the car are ${wheels} and tyre is ${this.name}`;
    }
}
//# sourceMappingURL=CarWithDieselEngine.js.map