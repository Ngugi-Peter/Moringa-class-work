/* for loop 
they are mostly used for number of iterations
combination of using while for numbers and loops
1.starting 2.condition 3.after each iteration
combines it into one line of code 
for(starting point; condition; after each iteration) {
    //code to be executed
}
*/

let k = 0;// starting point

while(k<20) {
    console.log("k is",k);
    k=k+1;//incrementing
}

for(let k = 0; k < 20; k++) {
    console.log("k is",k);
}



function mathTable() {
    let number = Number(prompt("Enter a number greater than or equal to 1"));
    let limit = Number(prompt("Enter how far the multiplication table should go"));

    while (number < 1 || limit < 1) {
        alert("Please enter valid numbers.");

        number = Number(prompt("Enter a number greater than or equal to 1"));
        limit = Number(prompt("Enter how far the multiplication table should go"));
    }

    function multiply(number, limit) {
        for (let i = 1; i <= limit; i++) {
            let result = number * i;
            console.log(`${number} * ${i} = ${result}`);
        }
    }

    multiply(number, limit);
}

mathTable();