// import the filing system module
const fs = require('fs');
//create a function with no parameters
function createFile(){
    //create a variable to store all the text to be written to the file
    let data ="";
    //loop from 1 to 10000
    for (let i = 1; i <= 10000; i++) {
        //write the data in currentdate.txt ===> write file changes the content
        fs.writeFileSync('currentdate.txt', data, (err) => {
       if(err){
        console.log("creating file failed")
        console.log(err) 
        return
       }

       console.log("file created successfully")
    });
}
}
//call the function to create the file
createFile();
