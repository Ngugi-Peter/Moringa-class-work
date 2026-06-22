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

let val3=30
let val4=40

let strng1="a"
let strng2="b"


let greaterThan=val3>val4
console.log(`val3=${val3}>val4=${val4} is greater than answer: ${greaterThan} 
    it is of type ${typeof greaterThan}`);
    

let lessThan=val3<val4
console.log(`val3=${val3}<val4=${val4} is less than answer: ${lessThan} 
    it is of type ${typeof lessThan}`);
let greaterThanEqual=val3>=val4
console.log(`val3=${val3}>=val4=${val4} is greater than equal answer: ${greaterThanEqual} 
    it is of type ${typeof greaterThanEqual}`);
let lessThanEqual=val3<=val4
console.log(`val3=${val3}<=val4=${val4} is less than equal answer: ${lessThanEqual} 
    it is of type ${typeof lessThanEqual}`);

let strngGreaterThan=strng1>strng2
console.log(`strng1=${strng1}>strng2=${strng2} is greater than answer: ${strngGreaterThan} 
    it is of type ${typeof strngGreaterThan}`);
let strngLessThan=strng1<strng2
console.log(`strng1=${strng1}<strng2=${strng2} is less than answer: ${strngLessThan} 
    it is of type ${typeof strngLessThan}`);
let strngGreaterThanEqual=strng1>=strng2
console.log(`strng1=${strng1}>=strng2=${strng2} is greater than equal answer: ${strngGreaterThanEqual} 
    it is of type ${typeof strngGreaterThanEqual}`);
let strngLessThanEqual=strng1<=strng2
console.log(`strng1=${strng1}<=strng2=${strng2} is less than equal answer: ${strngLessThanEqual} 
    it is of type ${typeof strngLessThanEqual}`);