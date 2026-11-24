const employeeObj = {
    id: "emp001",
    name: "dev",
    age: 40
};
const { id, name: empName, age } = employeeObj;
console.log(id + " " + empName);
const worker = {
    ...employeeObj,
    salary: 15000
};
console.log(worker);
const vehicle = {
    name: "Grandi10",
    model: "Hyundai",
    mode: () => console.log(`car details are ${vehicle.name} ${vehicle.model}`)
};
vehicle.mode();
export {};
//# sourceMappingURL=ObjectMethod.js.map