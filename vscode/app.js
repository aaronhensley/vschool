// var text = document.querySelector("#head").textContent
// document.querySelector("#para").textContent = text

// document.querySelector("#notstuff").textContent = text

// head.style.color = "red"

// notstuff.style.padding = "50px"

// document.body.style.backgroundColor = "burlywood"

var myBtn = document.getElementById("head")
myBtn.addEventListener("click" , function(){
alert("No!")
})



var newLi = document.createElement("li")
var stuff = document.getElementById("stuff")
stuff.prepend(newLi)
newLi.textContent = "Table"

var newP = document.createElement("p")
document.body.prepend(newP)
newP.textContent = "Did it work?"
newP.style.fontSize = "60px"
newP.style.textAlign = ("center")