var myBox = document.getElementById("box");
myBox.addEventListener("mouseenter", function blue() {
    myBox.style.backgroundColor = "blue";
});

myBox.addEventListener("mouseout", function out() {
    myBox.style.backgroundColor = "white";
});

myBox.addEventListener("mousedown", function red() {
    myBox.style.backgroundColor = "red";
});

myBox.addEventListener("mouseup", function yellow() {
    myBox.style.backgroundColor = "yellow";
});

myBox.addEventListener("dblclick", function green() {
    myBox.style.backgroundColor = "green";
});
document.addEventListener("wheel", function orange() {
    myBox.style.backgroundColor = "orange";
});

document.addEventListener("keydown", function (event) {
    if (event.key === "r") {
        myBox.style.backgroundColor = "red";
    } else if (event.key === "b") {
        myBox.style.backgroundColor = "blue";
    } else if (event.key === "y") {
        myBox.style.backgroundColor = "yellow";
    } else if (event.key === "g") {
        myBox.style.backgroundColor = "green";
    } else if (event.key === "o") {
        myBox.style.backgroundColor = "orange";
    } else {
        myBox.style.backgroundColor = "white";
    }
});
