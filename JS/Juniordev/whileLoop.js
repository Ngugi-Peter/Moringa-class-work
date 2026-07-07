let n =0;
let condition = true;
//condition falsey we automatically exit the loop
while (condition) {
    console.log("n is",n);
    n=n+1;
    if (n>10) {
        condition = false;
    }
}
/* create a function with any name
   the function should take a parameter
   @param is a number greater than 0
   have the loop count down fro this number use while loop*/
function printNumbers(n =0) {
    while(n>0) {
    console.log(n);
    n--;
      
    }
}
printNumbers(5);

function mathTable() {
    let number1 = Number(prompt("Enter a number greater than or equal to 1"));
    let number2 = Number(prompt("Enter a number greater than or equal to 1"));

    while (number1 < 1 || number2 < 1) {
        alert("Please enter valid numbers.");
        number1 = Number(prompt("Enter a number greater than or equal to 1"));
        number2 = Number(prompt("Enter a number greater than or equal to 1"));
    }

    function multiply(number1, number2) {
        let originalNumber2 = number2;

        while (number2 > 0) {
            let result = number1 * number2;
            console.log(`${number1} * ${number2} = ${result}`);
            number2--;
        }

        console.log(
            `The result of multiplying ${number1} and ${originalNumber2} is ${number1 * originalNumber2}`
        );
    }

    multiply(number1, number2);
}

mathTable();
