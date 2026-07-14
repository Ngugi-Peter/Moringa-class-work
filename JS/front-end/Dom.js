//getElementById
const getElement = document.getElementById("div1");
console.log(getElement)

//get element by class
const classElement = document.getElementsByClassName("list-item");
console.log("classElement");

//using querry selector
const trialOne = document.querySelector("#div1")
console.log("#div1")
const classElement2 = document.querySelector("list-item");
console.log(".list-item")

//using querry selector all
const classElement3 = document.querySelectorAll("list-item");
console.log(".list-item")

for(let i=0; i<classElement3.length; i++){
console.log(classElement3[i])
}

const newFruit = ["Kiwi", "Tomoko", "Grape"];
const getOriginalDiv = document.querySelector("#div1").innerHTML

//updating DOM
function original(){
    console.log("Original clicked")
    document.querySelector("#div1").innerHTML=getOriginalDiv
}

function replace(){
    console.log("Replace clicked")
    const newHtml =`
      <h3>list chores</h3>
    <ul>
        <li class="list-item">Cook</li>
        <li class="list-item">fold laundry</li>
        <li class="list-item">take out trash</li>
    </ul>`
    document.querySelector('#div1').innerHTML=newHtml
}

function Update(){
    console.log("Update clicked")
    const Fruits = document.querySelectorAll("#div1 .list-item")
    const newFruit = ["Kiwi", "Tomoko", "Grape"];
        for (let i = 0; i < Fruits.length; i++) {
        Fruits[i].innerText = newFruit[i];
    }
   
}

document.body.style.backgroundColor = "lightgray";