import {automobile} from "./ObjectMethod.js"

class fourWheeler implements automobile {
    
    noOfWheels:number;
    
    constructor() {
      this.noOfWheels=4;
    }



    display(): void {

        console.log (" display method of interface is implemented")
    }

}
    
const fourWheelerObj=new fourWheeler();
fourWheelerObj.display();




    