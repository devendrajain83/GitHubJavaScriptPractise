import {designationType} from "../utilities/types.js"
export interface EmployeeDetails {

readonly empId: number,
empName: string,
empDOB: string,
empAddress: string,
empQualification: Set<string>
empContactDetails: string;
designation: designationType;
empDetails(): string;


}

