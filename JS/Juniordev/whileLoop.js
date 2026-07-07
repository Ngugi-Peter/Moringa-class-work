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


