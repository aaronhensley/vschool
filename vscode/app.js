var text = document.querySelector("#head").textContent
document.querySelector("#para").textContent = text

document.querySelector("#notstuff").textContent = text

head.style.color = "red"

notstuff.style.padding = "50px"

document.body.style.backgroundColor = "burlywood"

var myBtn = document.getElementById("head")
myBtn.addEventListener("click" , function(){
alert("No!")
})