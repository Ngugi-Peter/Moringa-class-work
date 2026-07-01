/* 1 name function */
function sayMyName() {
    console.log("Joe");
}
/* 2 anonymous function <without a name 
a function can be assigned to a variable 
a variable can reference a function */
function areaOfCircle(r) {
    return 3.14 * r * r;
}
let ac = areaOfCircle; // what is the typeof ac and what is its value of ac
console.log(typeof ac); // function
console.log(ac); // [Function: areaOfCircle]
ac(5); // 78.5 ac becomes a function reference to areaOfCircle
/* How to create an anonymous function */
//1. create a variable and assign it to a function
let AOC = function areaOfCircle2(r) {
    return 3.14 * r * r;
};

// 2.directly equate yur variable to a function defination
AOC = areaOfCircle2;
//3, remove the function name and assign it to a variable
AOC = function (r) {
    return 3.14 * r * r;
};
//try callling the original function and the variable


AOC(123); // 3.14 * 123 * 123   