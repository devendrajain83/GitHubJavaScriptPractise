import { DepartMentDetails } from "../interfaces/DepartMentDetails.js"
import {departmentType} from "../utilities/types.js"

export default class Department implements DepartMentDetails {

   constructor(public deptId: string, public deptName: departmentType) {

   }

   deptDetails(): string {

      return this.deptId + " " + this.deptName;
   }


}