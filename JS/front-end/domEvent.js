const button = document.getElementById("btn");
button.addEventListener("click", function(){
    alert("Welcome stranger")
    console.log("Mouse over", new Date())
    console.log((Event));
    
})

const para = document.getElementById("graph")
para.addEventListener("mousemover", function(){
    console.log( "Mouse over", "x direction" )
    console.log( "Mouse over", "y direction" )
    
})