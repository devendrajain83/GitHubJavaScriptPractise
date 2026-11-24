class AbstarctionJS {

     constructor(name, empCode)
     {
        this.name= name;
        this.empCode= empCode;
     }

     #getName()
     {
       return this.name;
     }

     #getEmpCode()
     {
        return this.empCode;
     }

     getDetails()
     {
      
       const name1 =this.#getName();       
       const empCode1=this.#getEmpCode();
       const objDetails= {
              name: name1,
              empCode: empCode1
       }

       return objDetails;
     }


}

const obj= new AbstarctionJS("ram", 123);
console.log(obj.getDetails());


