let coins=10
let lives=2
let nextLevel=coins>9 && lives>1
console.log(`coins=${coins}>9 && lives=${lives}>1 is: ${nextLevel} 
    it is of type ${typeof nextLevel}`);

    let nextLevel2=coins>15 && lives>3
console.log(`coins=${coins}>15 && lives=${lives}>3 is: ${nextLevel2} 
    it is of type ${typeof nextLevel2}`);

    let nextLevel3=coins>15 && lives>1
console.log(`coins=${coins}>15 && lives=${lives}>1 is: ${nextLevel3} 
    it is of type ${typeof nextLevel3}`);
    
    let nextlevel4=coins>9 && lives>3
console.log(`coins=${coins}>9 && lives=${lives}>3 is: ${nextlevel4} 
    it is of type ${typeof nextlevel4}`);

    let nextLevel5=coins>9 || lives>1
console.log(`coins=${coins}>9 || lives=${lives}>1 is: ${nextLevel5} `);

let nextLevel6=coins>15 || lives>3
console.log(`coins=${coins}>15 || lives=  ${lives}>3 is: ${nextLevel6} `);

let nextLevel7=coins>15 || lives>1
console.log(`coins=${coins}>15 || lives=  ${lives}>1 is: ${nextLevel7} `);

let nextlevel8=coins>9 || lives>3
console.log(`coins=${coins}>9 || lives=  ${lives}>3 is: ${nextlevel8} `);

let nextlevel6=!(coins>9 || lives>1)
console.log(nextlevel6);

let nextlevel7=!(coins>15 || lives>3)
console.log(`!(coins=${coins}>15 || lives=  ${lives}>3) is: ${nextlevel7} `);