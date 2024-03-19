let addbtn = document.getElementById("addbtn")
let ul = document.getElementById("ul")
let remove = document.getElementById("remove")


let namesArrrays = []
addbtn.addEventListener("click" ,Addbutton)

function Addbutton(e){

let currentbtn = e.currentTarget // btn
let currentInput = currentbtn.previousElementSibling // input
let value = currentInput.value // inputs values

if(ul.children[0].className == "empty"){
  ul.children[0].remove()
}

let newlis = document.createElement("li")  // creating list 
 
newlis.innerHTML = 
`
<h3>${value}</h3>
<button onclick="Edititem(this)">Edit</button>
<button onclick="removeitem(this)" >Remove</button>

`
ul.appendChild(newlis)

namesArrrays.push(value)

console.log(namesArrrays)

localStorage.setItem("student" , namesArrrays)
localStorage.getItem("student")
} 




function removeitem(currentelement) {

  console.log(currentelement)
  currentelement.parentElement.remove()

  if(ul.children.length <= 0){

   let EmptyMessage = document.createElement("h2")

   EmptyMessage.classList.add("empty")

   EmptyMessage.textContent = "Write a Message"  
   
   
   ul.appendChild(EmptyMessage)

  }

  
}

function Edititem(e){
 let btn = e.previousElementSibling
 let h2 = btn.textContent
 let input2 = document.createElement("input")
 input2.type = "text"
 h2 = input2
 console.log(e.parentElement.replaceChlid( input2,btn  ))



//  console.log(h2)
}



