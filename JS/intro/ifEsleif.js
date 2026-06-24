/* if and else if is a chain of conditions that are checked in order. if the first condition is true, 
the code block inside it will run and the rest of the conditions will be ignored.
if the first condition is false, the next condition will be checked 
and so on until a true condition is found or all conditions are false. */

let age= prompt("Enter your age");
alert(`Enter age ${age}`);
console.log(`age is ${age} typeof ${typeof age}`);
if (age>10) {
    alert("You are baby");
}
else if (age>15) {
    alert("You are teenager");
}
else if(age>18) {
    alert("You are adult");
}
else if(age>30) {
    alert("you can marry");
}
else if(age>40) {
    alert("you can retire");
}
else if(age>50) {
    alert("you are old");
}

let age1= prompt("Enter your age");
alert(`Enter age ${age1}`);
console.log(`age is ${age1} typeof ${typeof age1}`);
if (age1<10) {
    alert("You are baby");
}
else if (age1>15) {
    alert("You are teenager");
}
else if(age1>18) {
    alert("You are adult");
}
else if(age1>30) {
    alert("you can marry");
}
else if(age1>40) {
    alert("you can retire");
}
else if(age1>50) {
    alert("you are old");
}

/* if and else if is a chain of conditions that are checked in order.
 if the first condition is true,
hence if i give my age 28 (age1=28) the first condition will be false,
the second condition will be false,
the third condition will be true it will give an alert of "You are adult" and the rest of the conditions will be ignored.
if i give my age 8 (age1=8) the first condition will be true, it will give an alert of "You are baby"
and the rest of the conditions will be ignored.
if i give my age 18 (age1=18) the first condition will be false, the second condition will be false,
the third condition will be true it will give an alert of "You are adult" and the rest of the conditions will be ignored.
 */