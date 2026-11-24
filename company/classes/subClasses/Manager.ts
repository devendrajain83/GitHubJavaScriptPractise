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
                reportee: this.reportees.join(","),
                reporteeQualification: [...this.empQualification].join(",")

            })

        }

    }

    displayReportee(): void {
        console.log(`Employees reporting to Manager ${this.empName} are ${this.reportees}`);
    }

}

//const ceo1= new CEO(1,"Arun Nathani", "1/1/1970","Kalyani Nagar Pune 411014",new Set(["B.E (COMP)", "M Tech", "MBA"]),"9423905616", "CEO",new Department("dept01", "Engineering"));
// ceo1.empDetails();
// const emp11= new Employee(11,"Devendra Jain", "1/1/1970","Kalyani Nagar Pune 411014",new Set(["B.E (COMP)","C-DAC"]),"9423905616", "VP",new Department("dept01", "Engineering"));




