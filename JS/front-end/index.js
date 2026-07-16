const requestOptions = {
  method: "GET",
  redirect: "follow"
};

/*fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));*/
  
/*
code without promise
1. create a variable <a global variable>
2. console.og value of the variable
3.create a fuction and update the value of the variable
4.console.log the value
*/
 /* let flow = "this is flow";
  console.log("19:", flow)
  function newFlow (){
    flow = "Updated flow"
  }
  newFlow()
  console.log("24:", flow)*/
  let flow = "this is flow";
  fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {console.log(result)
  //console.log("30:", flow)
   //flow = "Updated flow"
   //console.log("type of result", typeof result)
   //console.log(result)
})
  .catch((error) => console.error(error));

  console.log(result)