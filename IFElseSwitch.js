


class A {


returnGrade (percentage)
{
    let grade;
    if (percentage>=90)
    {
        return grade = 'A';
    }
    else if(percentage>=70)
    {
       return grade = 'B'; 
    }
    else if(percentage>=50)
    {
       return grade = 'C'; 
    }
    else if(percentage<50 && percentage>=35)
    {
      return grade = 'D'; 
    }
    else
    {
       return "you are failed";
    }
}


returnMonth(noofDays)
{
    switch(noofDays)
    {
      case 30:
         return "month could be among 'March', 'June', 'September'" ;
         break;
      case 31:
        return "month could be among 'January', 'April', 'May'" ;
        break;
      case 28:
      case 29:
        return "Month is 'February'";
        break;
      default:
        return "Invalid Input";
        break;


    }

}


returnnoOfDays(month) 
{
    //let monthlowercase=month.toLowerCase();
   switch(month.toLowerCase())
   {
     case "january":
        return " no. of days are 31";
        break;
    case "february":
        return " no. of days are 28";
        break;
    default:
        return "Invalid Input";
        



   }

}



}

const obj= new A();
//console.log(obj.returnGrade(34));
//console.log(obj.returnMonth(29));
console.log(obj.returnnoOfDays("FebruarY"))
