/*let grossMonthySalary= null;
while(true){
    let gross = prompt("Enter your gross monthly salary");
    if(!isNaN(gross)){
        gross= Number(gross);
        if(gross>0){
            grossMonthySalary= gross;
            break;
        }
    }
    alert(`Invalid amount entered.
        Please enter a valid number greater than 0`);
}
console.log(`Gross monthly salary is ${grossMonthySalary} its type ${typeof grossMonthySalary} `);

*/

let grossMonthySalary= null;
while(true){
    let gross = prompt("Enter your gross monthly salary");
    if(!isNaN(gross)){
        gross= Number(gross);
        if(gross>0){
            grossMonthySalary= gross;
            break;
        }
    }
}

if(grossMonthySalary<24000){
    let paye= grossMonthySalary*0.10;
    alert(`Your PAYE is ${paye}`);
    console.log(`Your PAYE is ${paye}`);
}
else if(grossMonthySalary<32333){
    let paye= grossMonthySalary*0.25;
    alert(`Your PAYE is ${paye}`);
    console.log(`Your PAYE is ${paye}`);
}
else if(grossMonthySalary<500000){
    let paye= grossMonthySalary*0.325;
    alert(`Your PAYE is ${paye}`);
    console.log(`Your PAYE is ${paye}`);
}
else{
    let paye= grossMonthySalary*0.35;
    alert(`Your PAYE is ${paye}`);
    console.log(`Your PAYE is ${paye}`);
}
let Nssf = 0;
let totalNssf = Nssf*2;

if (grossMonthySalary > 9000) {
    Nssf = grossMonthySalary * 0.06;
    totalNssf = Nssf*2;
    alert(`Your NSSF is ${totalNssf}. You are in Tier 1`);
}
else if (grossMonthySalary >= 9000 && grossMonthySalary <= 108000) {
    Nssf = grossMonthySalary * 0.06;
    totalNssf = Nssf*2;
    alert(`Your NSSF is ${totalNssf}. You are in Tier 2`);
}
else {
    Nssf = 6480;
    totalNssf = Nssf*2;
    alert(`Your NSSF is ${totalNssf}. You are in Tier 3`);
}
// taxable income is calculated after deducting NSSF from gross salary 
let taxableIncome = grossMonthySalary - totalNssf;
// to get paye we need to run our taxable income through the paye calculator
// PAYE calculator
let shif = grossMonthySalary * 0.0275;
let housingLevy =grossmonthysalary * 0.15;

const bracket1 = 240000
const bracket2 =32333
const bracket3 = 500000
const bracket4 = 800000

const band1 = bracket1 * 0.1;
const band2 = (bracket2-bracket1)*0.25;
const band3 = (bracket3-bracket2)*0.3;
const band4 = (bracket4-bracket3)*0.325;

const personalRelief=2400;

if(taxableIncome<=24000){
    paye= taxableIncome*0.1
    paye_tier= "paye 0-24000kes";
}else if(taxableIncome <=32333){
    let diff=taxableIncome-24000;
    let tax=diff *0.25;
    paye= tax+ band1;
    paye_tier = 'PAYE 24000-32333 KES';
}else if(taxableIncome <=500000){
   let diff=taxableIncome-24000;
    let tax=diff *0.25;
    paye= band2 + tax  + band1;
    paye_tier = 'PAYE 500000-32333 KES' 
}else if(taxableIncome <=800000){
let diff=taxableIncome-500000;
    let tax=diff *0.325;
    paye= band3 + band2 + tax  + band1;
    paye_tier = 'PAYE 800000 - 500000 KES'
}else {
    let diff=taxableIncome-800000;
    let tax=diff *0.35;
    paye= band4 + band3 + band2 + tax  + band1;
    paye_tier = 'PAYE 800000 to infinity KES'
}

const final_paye = Math.max(0, paye -  personalRelief)