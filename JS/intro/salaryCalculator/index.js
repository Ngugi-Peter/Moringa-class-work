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