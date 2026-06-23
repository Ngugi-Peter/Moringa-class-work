

## VARIABLES

Variables are used to store  or represent values a concept borrowed fro mathematics

    x=45
    t=36
    y=93
in javascript we use "let" and "const" to declare variables

    let x=45;
    const j=67;

## Rules On Naming Variables

 - We dont space our variables names e.g 
 
    let my age=34; (is wrong)
  
    let myAge=34; (correct)
      

 - Only letters digits underscores and dollars signs are used wen naming.
 - Variables are case sensitive.
 - Only letters underscores and dollor signs ca begin naming a variable.
 - there are special word reserved by JS hence we cant use them in naming to avoid confusion.
 
 ## Ways of Writing Variables for a programmer 
 
 - Pascal Case; where all the first letters  in the variable are capitalised
 e.g `let MyAge=45;
 

 - Carmel case ; this is the recommeded way to write variables in JS where the first letter is written in lowercase e.g
 

    let myAge=34;
    

 - Snake case ;used mostly in python separetes the words in a variable using underscore e.g

    let My_Age=84;

    ## Primitive Data Types

> 

 ******1. Number**s****

We have three types of numbers 
 -  real numbers this are whole numbers without decimals e.g
 

let f=54;
console.log(f);
    

 - floating numbers , this are number values with decimals e.g
 

  

  let t=69;
   console.log(t);
    

 - negative number are numbers which are negative 

 let y=-23;
 console.log(y)

;
 

 

 **2. Strings**
strings store sequences of data
there are 3 ways of creating strings

 - double quotes strings""
 -  single quotes strings 'used when we want to  
   include speech marks in our code' 
 - back ticks < template strings>

 let  str="double quotes strings"
console.log(str);



    let  str2=  'this is a single qoute string.'
    console.log(str2);

    let  str3  =  ` this an example of back tick it is also called template string.`
    console.log(str3);

    let  str4  =  " numbers like 23 between quotes are called strings"
    console.log(str4);
 **3.boleons represent True or false**

    let  lightsOn  =  true;
    console.log(lightsOn); 
    let  lightOff  =  false;
    console.log(lightOff);
***4.null represents lack of value absence of value****

    let  debt1=  null;
    console.log(debt1);

undefined also represents lack of value like null
but never use undefined as it is used by javascript
and may cause confusion*/

    let  debt2=  undefined;
    console.log(debt2);
    let  debt3;//this is an undefined data type which will bring undefined.
    console.log(debt3);

   



# Comparisons operators

they only evaluate true or false and are used by all data types
1.Equality ==
2.Strict Equality ===
3.Inequality !=
4.Strict Inequality !==

## Strict Equality and Equality

example let 

    let num2="23";
    let num3=23;
    let strictEqual=numb1===numd2

if we console.log it brings back false as num2 is a string and num3 is a number on the other hand if we use

    let nonStrictEqual=numb1==numd2

it gives back a boolean that says true

## Inequality and strict inequality

in strict inequality different types should not be equal to each other example;

    let val1="30"
    let val2=30
    let strictinEquality= val1!==val2

if we console.log it brings back true as this values are not the same one being a string the other being a number

    let val1="30"
    let val2=30
    let nonStrictinEquality= val1!=val2

On the other hand if we run non strict inequality it gives a Boolean false as non strict interprets the sting 30 to be equal to the number 30. 

 
