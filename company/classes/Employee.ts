import { EmployeeDetails } from "../interfaces/EmployeeDetails.js"
import { designationType } from "../utilities/types.js";
import Department from "./Department.js"
export default class Employee implements EmployeeDetails {

    department: Department;
    reportees: Employee[] = [];
    static employeeMap = new Map<string, { reportee: string }>();
    static employeeRegistryMap = new Map<number, Employee>();



    constructor(public empId: number, public empName: string, public empDOB: string, public empAddress: string, public empQualification: Set<string>, public empContactDetails: string, public designation: designationType, department: Department) {
        if (this.empId === empId) {
            throw new Error(`employee with empId ${this.empId} is already present in the system, duplicates empid are not allowed`);
        }

        this.empDOB = new Date(empDOB).toLocaleDateString("en-GB")
        this.department = department;
        Employee.employeeRegistryMap.set(empId, this);
    }

    empDetails(): string {

        let qualification = [...this.empQualification].join(",")

        return this.empId + " " + this.empName + " " + this.empDOB + " " + this.empAddress + " " + qualification + " " + this.empContactDetails + " " + this.designation + " " + this.department.deptDetails();
    }




    addReportee(emp: Employee): void {

        if (this.empId === emp.empId) {
            throw new Error("An employee cannot report to self")
        }
        else {
            this.reportees.push(emp);
            console.log(`reportee ${emp.empName} and ${emp.designation} as designation is added successfully to reportee list of employee ${this.empName}`)
            Employee.employeeMap.set(this.empName, {
                reportee: this.reportees.join(","),

            })

        }


    }

    meeting(): void {

    }

    toString(): string {

        return `${this.empName} (${this.designation}) Qualifications [${[...this.empQualification].join(",")}]`;
    }

    displayReportee(): void {

        console.log(`Employees reporting to ${this.empName} are ${this.reportees}`)

    }


}


