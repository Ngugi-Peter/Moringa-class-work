let firstname = "John";
let lastname = "Maina";
let age = 30;
let city = "Githunguri";
let userDetails = firstname + " " + lastname + " is " + age + " years old and lives in " + city + ".";

console.log(userDetails);
console.log("User details is " + typeof userDetails); // Output: string

// Using template literals to create a string
let userDetails2 = `${firstname} ${lastname} is ${age} years old and lives in ${city}.`;
console.log(userDetails2);
console.log("User details is " + typeof userDetails2); // Output: string
console.log(`${firstname} ${lastname} is ${age} years old and lives in ${city}.`);// we can also use template literals directly in the console.log() statement without creating a separate variable.