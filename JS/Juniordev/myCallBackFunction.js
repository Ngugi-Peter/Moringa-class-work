//circle function
function circle(pi, radius) {
    return pi * radius * radius;
}
console.log(circle(3.14, 5)); // returns 78.5
//square function
function square(side) {
    return side * side;
}
console.log(square(5)); // returns 25

//rectangle function
function rectangle(length, width) {
    return length * width;
}
console.log(rectangle(10, 5)); // returns 50

//triangle function
const triangle = (base, height) => {
    return 0.5 * base * height;
};

console.log(triangle(10, 5)); // returns 25

function shape(shapeFunction, shapeName, side1, side2, side3) {
    console.log(`shapeFunction; ${shapeFunction} it a ${typeof shapeFunction}`);
    console.log(`shapeName; ${shapeName} it a ${typeof shapeName}`);
    console.log(`side1; ${side1} it a ${typeof side1}`);
    console.log(`side2; ${side2} it a ${typeof side2}`);
    console.log(`side3; ${side3} it a ${typeof side3}`);
}
shape(circle, "circle", 3.14, 5);