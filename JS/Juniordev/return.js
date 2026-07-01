/*function sayMyname(){
let first_name = "Peter"// statement 1
console.log(`the first name is ${first_name}`)//statement 2

let Second_name = "ngugi"// statement 3
console.log(`the second name is ${Second_name}`)//statement4

let full_name = `${first_name} ${Second_name}`;//statement 5
console.log(`the full name is ${first_name}`)// statement 6
}

let sayMyNameValue = sayMyname();
console.log(`function returned ${sayMyname}`)*/


//scenario 2:after the second statement add a return function
function sayMyname(){
let first_name = "Peter"// statement 1
console.log(`the first name is ${first_name}`)//statement 2
return;
let Second_name = "ngugi"// statement 3
console.log(`the second name is ${Second_name}`)//statement4

let full_name = `${first_name} ${Second_name}`;//statement 5
console.log(`the full name is ${first_name} ${Second_name}`)// statement 6
}

let sayMyNameValue = sayMyname();
console.log(`function returned ${sayMyNameValue}`)

//scenario 3:put return value after the fourth statement
function sayMyname(){
let first_name = "Peter"// statement 1
console.log(`the first name is ${first_name}`)//statement 2

let Second_name = "ngugi"// statement 3
console.log(`the second name is ${Second_name}`)//statement4
return;
let full_name = `${first_name} ${Second_name}`;//statement 5
console.log(`the full name is ${first_name} ${Second_name}`)// statement 6
}

let sayMyNameValue = sayMyname();
console.log(`function returned ${sayMyNameValue}`)

//scenario 4: put a return value anywhere and in the code and add a string in the return
function sayMyname(){
return ("My fullname is ")
let first_name = "Peter"// statement 1
console.log(`the first name is ${first_name}`)//statement 2

let Second_name = "ngugi"// statement 3
console.log(`the second name is ${Second_name}`)//statement4

let full_name = `${first_name} ${Second_name}`;//statement 5
console.log(`the full name is ${first_name} ${Second_name}`)// statement 6
}

let sayMyNameValue = sayMyname();
console.log(`function returned ${sayMyNameValue}`)

//Scenario 5: put a return value anywhere and in the code and add a number in the return
function sayMyname(){
return (345623);
let first_name = "Peter"// statement 1
console.log(`the first name is ${first_name}`)//statement 2

let Second_name = "ngugi"// statement 3
console.log(`the second name is ${Second_name}`)//statement4

let full_name = `${first_name} ${Second_name}`;//statement 5
console.log(`the full name is ${first_name} ${Second_name}`)// statement 6
}

let sayMyNameValue = sayMyname();
console.log(`function returned ${sayMyNameValue}`)

//Scenario 6: return a boolean
function sayMyname(){
let first_name = "Peter"// statement 1
console.log(`the first name is ${first_name}`)//statement 2

let Second_name = "ngugi"// statement 3
console.log(`the second name is ${Second_name}`)//statement4

let full_name = `${first_name} ${Second_name}`;//statement 5
console.log(`the full name is ${first_name} ${Second_name}`)// statement 6
return (true);
}

let sayMyNameValue = sayMyname();
console.log(`function returned ${sayMyNameValue}`)