function letName() {
    let name = "Peter";
    console.log(name);
    if (true) { 
        let name = "Joe";
    }
    if (true) {
        let name = "John";
    }  
}
 

let name0 ="Grace";
function sayMyName() {
    console.log(`My name is ${name0} in line:15`);
    let name1 = "Bane";
    console.log(`My name is ${name1} in line:16`);
    if(true) {
        let name2 = "Joe";
        console.log(`My name is ${name2} in line:18`);// will print Joe because the name variable is declared in the block scope of the if statement
        let name3 = "Olive";
    console.log(`My name is ${name3} in line:19`);// will print Olive because the name variable is declared in the block scope of the if statement
    }
    return;
}
sayMyName();