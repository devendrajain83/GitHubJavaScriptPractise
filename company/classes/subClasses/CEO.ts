import Employee from "../Employee.js"
import Department from "../Department.js"
import { designationType } from "../../utilities/types.js"

export default class CEO extends Employee {

    constructor(public empId: number, public empName: string, public empDOB: string, public empAddress: string, public empQualification: Set<string>, public empContactDetails: string, public designation: designationType, department: Department) {
        super(empId, empName, empDOB, empAddress, empQualification, empContactDetails, designation, department)
    }

    addReportee(emp: Employee): void {

        if (this.empId === emp.empId) {
            throw new Error("An employee cannot report to self")
        }

        else if (emp.designation !== "Sr.VP" && emp.designation !== "VP" && emp.designation !== "Delivery Manager") {
            throw new Error("An employee other than Sr. VP and VP and Delivery Manager cannot directly report to CEO")
        }
        else {

            this.reportees.push(emp)
            console.log(`reportee ${emp.empName}  ${emp.designation} as designation is added successfully to reportee list of employee ${this.empName}`);
            // Employee.employeeMap.set(this.empName, {
            //     reportee: this.reportees.join(","),
            //     reporteeQualification: [...this.empQualification].join(",")

            }

        }


    displayReportee(): void {

        console.log(`Employees reporting to CEO ${this.empName} are ${this.reportees}`);

    }



}






