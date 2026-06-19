let num2="23";
let num3=23;
let strictEqual=num2===num3
console.log(`num2=${num2}===num3=${num3} is strict equal: ${strictEqual} 
    it is of type ${typeof strictEqual}`);

let nonStrictEqual=num2==num3
console.log(`num2=${num2}==num3=${num3} is non-strict equal: ${nonStrictEqual} 
    it is of type ${typeof nonStrictEqual}`);

let val1="30"
let val2=30
let strictinEquality= val1!==val2
console.log(`val1=${val1}!==val2=${val2} is strict inequality answer: ${strictinEquality} 
    it is of type ${typeof strictinEquality}`);
    let nonStrictInequality= val1!=val2
console.log(`val1=${val1}!=val2=${val2} is non-strict inequality answer: ${nonStrictInequality} 
    it is of type ${typeof nonStrictInequality}`);

