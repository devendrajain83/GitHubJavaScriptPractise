import Employee from "../Employee.js"
import Department from "../Department.js"
import { designationType } from "../../utilities/types.js"

export default class Manager extends Employee {

    constructor(public empId: number, public empName: string, public empDOB: string, public empAddress: string, public empQualification: Set<string>, public empContactDetails: string, public designation: designationType, department: Department) {
        super(empId, empName, empDOB, empAddress, empQualification, empContactDetails, designation, department)
    }

    addReportee(emp: Employee): void {

        if (this.empId === emp.empId) {
            throw new Error("An employee cannot report to self")
        }

        else if (emp.designation !== "S/W Engineer" && emp.designation !== "QA Engineer") {
            throw new Error("An employee other than S/W Engineer and QA Engineer cannot directly report to Delivery Manager")
        }
        else {

            this.reportees.push(emp)
            console.log(`reportee ${emp.empName} ${emp.designation} as designation is added successfully to reportee list of employee ${this.empName}`);
            Employee.employeeMap.set(this.empName, {
                reportee: this.reportees.join(",")


            })

        }

    }

    displayReportee(): void {
        console.log(`Employees reporting to Manager ${this.empName} are ${this.reportees}`);
    }

}



