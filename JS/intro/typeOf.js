let numb1= 749;
console.log("numb1 ",numb1 ,"Its type is ",typeof numb1)
let strNumb= "645";
console.log("strNumb ",strNumb , "Its type is ",typeof strNumb)
let name="John"
console.log("name ",name , "Its type is ",typeof name)
let isMarried= false;
console.log("isMarried ",isMarried , "Its type is ",typeof isMarried)
let undef;
console.log("undef ",undef , "Its type is ",typeof undef)
let nulV= null;
console.log("nul ",nulV , "Its type is ",typeof nulV)


const salary = 5000;
const bonus = "1000";
const grossSalary = salary + bonus;
console.log("Gross Salary:", grossSalary);
const paye = grossSalary * 0.2;
console.log("for the gross of ",grossSalary, "the PAYE is", paye);
const Nhif= 2500;
console.log("the NHIF is", Nhif);
const sha= 500;
console.log("the SHA is", sha);
const totalDeductions = paye + Nhif + sha;
console.log("the total deductions are", totalDeductions);
const netSalary = grossSalary - totalDeductions;
console.log("the net salary is", netSalary);