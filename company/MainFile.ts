import Employee from "./classes/Employee.js"
import Department from "./classes/Department.js"
import CEO from "./classes/subClasses/CEO.js"
import VP from "./classes/subClasses/VP.js"
import DeliveryManager from "./classes/subClasses/DeliveryManager.js"
import Manager from "./classes/subClasses/Manager.js"

import fs from "node:fs"

function readEmployeeData(filepath: string): void {

   const rawData = JSON.parse(fs.readFileSync(filepath, "utf-8"))
   const deptMap = new Map<string, Department>();
   for (const item of rawData) {
      let dept = deptMap.get(item.deptId)
      if (!dept) {
         dept = new Department(item.deptId, item.deptName)
         deptMap.set(item.deptId, dept)
      }
      switch (item.designation) {

         case "CEO":
            new CEO(item.empId, item.empName, item.empDOB, item.empAddress, new Set(item.empQualification), item.empContactDetails, item.designation, dept)
            break;
         case "VP":
            new VP(item.empId, item.empName, item.empDOB, item.empAddress, new Set(item.empQualification), item.empContactDetails, item.designation, new Department(item.deptId, item.deptName))
            break;
         case "Delivery Manager":
            new DeliveryManager(item.empId, item.empName, item.empDOB, item.empAddress, new Set(item.empQualification), item.empContactDetails, item.designation, new Department(item.deptId, item.deptName))
            break;


      }


   }

   for (const item of rawData) {

      if (item.reportToId !== null && item.reportToId !== undefined) {

         const managerId = item.reportToId;
         const resourceID = item.empId;
         const empManager = Employee.employeeRegistryMap.get(item.reportToId)
         const managerResource = Employee.employeeRegistryMap.get(item.empId)
         if (empManager && managerResource) {
            empManager.addReportee(managerResource)
            empManager.displayReportee();

         }

      }


   }


}



readEmployeeData("./company/EmployeeData.json");

// const emp101 = new Employee(101, "Arnav Jain", "1/1/1970", "Kalyani Nagar Pune 411014", new Set(["B.E (COMP)", "C-DAC"]), "7054671234", "S/W Engineer", new Department("dept01", "Engineering"));
// const emp102 = new Employee(102, "Subhash Gupta", "1/1/1970", "Kalyani Nagar Pune 411014", new Set(["B.E (COMP)", "C-DAC"]), "7054671234", "S/W Engineer", new Department("dept01", "Engineering"));
// const emp103 = new Employee(103, "Purva Solanki", "1/1/1985", "Kalyani Nagar Pune 411014", new Set(["B.E (COMP)", "C-DAC"]), "7054671234", "QA Engineer", new Department("dept01", "Engineering"));

// emp101.addReportee(emp102);
// emp101.addReportee(emp103);
// emp101.displayReportee();



// const manager201 = new Manager(201, "Ram Sharma", "1/1/1965", "Kalyani Nagar Pune 411014", new Set(["B.E (COMP)", "C-DAC", "MBA(IT)"]), "88304567890", "Manager", new Department("dept01", "Engineering"));
// manager201.addReportee(emp101)
// manager201.displayReportee();

// const deliveryManager301 = new DeliveryManager(301, "Anju Razdan", "1/1/1968", "Kalyani Nagar Pune 411014", new Set(["B.E (COMP)", "C-DAC", "MBA(IT)"]), "9823456701", "Delivery Manager", new Department("dept01", "Engineering"));
// deliveryManager301.addReportee(manager201)

// deliveryManager301.displayReportee();

// const VP401 = new VP(401, "Ashwin Parmar", "1/1/1971", "Kalyani Nagar Pune 411014", new Set(["B.E (COMP)", "C-DAC", "MBA(Finance)"]), "9823456701", "VP", new Department("dept01", "Engineering"));
// VP401.addReportee(deliveryManager301);

// VP401.displayReportee();

// const ceo1 = new CEO(1, "Arun Nathani", "1/1/1970", "Kalyani Nagar Pune 411014", new Set(["B.E (COMP)", "M Tech", "MBA"]), "9423905616", "CEO", new Department("dept01", "Engineering"));
// ceo1.addReportee(VP401)

// ceo1.displayReportee();

// console.log("Displaying all the employees of organisation")


// Employee.employeeMap.forEach((details,empName)=>{
//  console.log(`Reportees of ${empName} -> ${details.reportee}`)

// });


//for (const e of Employee.employee) {
//console.log([...e.empQualification].join(",") + " " + e.designation + " " + e.reportees.join(","))
//}




