/*
functions allow us to write ussuable bits of code that can be called when needed. 
Functions can take in parameters and return values.
big rule function only work when called
calling a function is telling it to run.
*/
function timeAlert() {
    const date = new Date();
    alert(`time stamp ${date.toISOString()}`);
}

/* to call a function we use function name and then brackets
timeAlert()
*/

//timeAlert();
if(base !=="number"){
    console.warn(`kindly input a number`);
    return;
}

if(height !=="number"){
    console.warn(`kindly input a number`);
    return;
}

function areaOfTriangle(base, height) {
    console.log(`base length is ${base} and type is ${typeof base}`);
    console.log(`height is ${height} and type is ${typeof height}`);
    const area = 0.5 * base * height;
    console.log(`for triangle with base ${base} and height ${height}, the area is ${area}`);
}

// scenario 1 call the function without parameters or arguments
areaOfTriangle();

// scenario 2 call the function with justone parameter and argument
areaOfTriangle(10);

// scenario 3 call the function with both parameters and arguments
areaOfTriangle(10, 20);

//scenario 4 create two variables and use variable name as arguments
const base = 10;
const height = 20;
areaOfTriangle(base, height);

// scenario 5 call the function with both parameters and arguments but with different data types
const base1 = "10";
const height1 = true;
areaOfTriangle(base1, height1);