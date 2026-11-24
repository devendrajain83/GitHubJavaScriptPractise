import {departmentType} from "../utilities/types.js"
export interface DepartMentDetails {

    readonly deptId: string,
    deptName: departmentType,
    deptDetails(): string;
}