/* Recursive Functions    
is afunction that calls itself until a certain condition is met.
 In this case, the function will keep prompting the user
to enter a valid number until they do so.
Since it may create an endless loop we use return function to exit the function.

*/
/*
function salaryGrossPrompt() {
    let salaryGross = prompt("Enter your gross salary:");
    if (isNaN(salaryGross)===false){
        console.log(`You entered this amount ${salaryGross} exiting`);
        return
    }
    alert("Please enter a valid number");
    salaryGrossPrompt();
}
salaryGrossPrompt();    */
/*
function grossSalaryPrompt() {
    let salaryGross = prompt("Enter your gross salary:");
    if (isNaN(salaryGross)===false){
        console.log(`You entered this amount ${salaryGross} exiting`);}
        else if (isNaN(salaryGross)===true){
        prompt("Please enter a valid number");
        grossSalaryPrompt();
    }
        return
    }
    grossSalaryPrompt(); */

    function salaryGrossPrompt() {
    let salaryGross = prompt("Enter your gross salary:");
    if (isNaN(salaryGross)===false){
        console.log(`You entered this amount ${salaryGross} exiting`);
        return
    }
    prompt("Please enter a valid number");
    salaryGrossPrompt();
}
salaryGrossPrompt(); 

    