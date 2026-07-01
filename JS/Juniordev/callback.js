/*function myTime() {
    let date = new Date();
    alert(date.toISOString());
}
myTime();
 
setInterval(myTime, 10000);*/
// try call back with annonymous function
// this shows how to use annonymous function as a callback function
let currentTime = function myTime2() {
    let date = new Date();
    alert(date.toISOString());
}

setInterval(currentTime, 10000);
// this shows how to use annonymous function as a callback function
let currentTime2 = function () {
    let date = new Date();
    alert(date.toISOString());
}

setInterval(currentTime2, 10000);
// this shows how to use arrow function as a callback function
let currentTime3 = () => {
    let date = new Date();
    alert(date.toISOString());
}

setInterval(currentTime3, 10000);