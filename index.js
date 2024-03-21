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

function Edititem(currentbtn){
    
  if(currentbtn.textContent == "save"){
       currentbtn.textContent = "edit"
       let resverseinput = currentbtn.previousElementSibling
       let inputvalue = resverseinput.value
       let h4 = document.createElement("h4")
       h4.textContent = inputvalue
       currentbtn.parentElement.replaceChild( h4,resverseinput)
  }else{
   currentbtn.textContent = "save"
   
   let h3 = currentbtn.previousElementSibling
   let h3value = h3.textContent
   let newInput = document.createElement("input")
   newInput.classList.add("input-java")
   newInput.type = "text"
   newInput.value = h3value

   currentbtn.parentElement.replaceChild(newInput, h3)
  }

}


//  console.log(h2)




