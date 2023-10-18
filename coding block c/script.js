
const back = document.querySelector("#back")
const pri = document.querySelector("#pri")
const price = document.querySelector("#price")
const p = document.querySelector("#p")
const page = document.querySelector("#page")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const con = document.querySelector(".container")
const idk = document.querySelector("#idk")
const i = document.querySelector("#i")
const lo = document.querySelector("#log")
const a = document.querySelector("#a")
const bea = document.querySelector("#bea")
const iss = document.querySelector("#pic")
const beans = document.querySelector("#beans")
const offline = document.getElementById("of")
const wel = document.getElementById("wel")
let menu = false;
let error = false
const diver = document.getElementById("diver")
diver.innerHTML = localStorage.getItem("username","password")

page.addEventListener('click', () =>{
    idk.style.visibility = "visible"
})
con.addEventListener('click', () =>{  
    if(!menu){
      bar1.classList.add("change")
      bar2.classList.add("change")
      bar3.classList.add("change")
      menu = true
      setTimeout(function(){window.location.replace("cont.html")},420)
    }
    else{
      bar2.classList.remove("change")
      bar1.classList.remove("change")
      bar3.classList.remove("change")
      menu = false
    }
      
  })
var myVar;
function displayof(){
  offline.style.display = "block"
} 
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function search(){
  var x = document.getElementById("my").value
  if(x === "earth"){
    error = true
    window.location.replace("earth.html")
  }
  if(x === "beans" ){
    error = true
    window.location.replace("beans.html")
  }
  if(x === "galaxy"){
    error = true
    window.location.replace("gal.html")
  }
  if(x === "the iss"){
        error = true
    window.location.replace("iss.html")
  }
  if(x === "youtube"){
    error = true
    window.location.replace("you.html")
  }
  else if(x === "iss"){
    error = true
    window.location.replace("iss.html")
  }
  else if(x === "can of beans"){
    error = true
    window.location.replace("beans.html")
  }
  else{
    error == true
    if(error == false){window.location.replace("error.html")}
  }
}