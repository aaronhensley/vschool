var newHead = document.createElement("h1");
newHead.textContent = "JavaScript Wrote This";
var myHead = document.getElementById("header");
myHead.append(newHead);

var myName = document.createElement("h2");
myName.textContent = "[Aaron Hensley]";
myHead.append(myName);
myName.style.color = "orange";

var addText = document.createElement("span");
addText.textContent = "Wrote the JavaScript";
myName.append(addText);
addText.style.color = "black";

var messageOne = document.getElementById("message one");
messageOne.textContent = "Mind if we have a conversation?";

var messageTwo = document.getElementById("message two");
messageTwo.textContent = "Sure thing! What's up?";

var messageThree = document.getElementById("message three");
messageThree.textContent = "Just wanted to say, I hope you have a nice day";

var messageFour = document.getElementById("message four");
messageFour.textContent = "Thank you!";

//delete all

var allMessages = document.getElementsByClassName("message");

var clearBtn = document.getElementById("clear-button");
clearBtn.addEventListener("click", function () {
    for (let i = 0, max = allMessages.length; i < max; i++) {
        allMessages[i].textContent = "";
        allMessages[i].style.backgroundColor = "white";
    }
});

//change theme

var messageLeft = document.getElementsByClassName("message left");
var messageRight = document.getElementsByClassName("message right");
var myTheme = document.getElementById("theme-drop-down");

myTheme.addEventListener("change", function (e) {
    changeTheme(e);
});

function changeTheme(e) {
    if (e.target.value === "theme-two") {
        redBlack();
    }else{
        brownBlue()
    }
}

function redBlack() {
    console.log(messageRight)
    console.log(messageLeft)
    for (let i = 0, max = messageRight.length; i < max; i++) {
        messageRight[i].style.backgroundColor = "black";
        messageRight[i].style.color = "white";
    }
    for (let i = 0, max = messageLeft.length; i< max; i++) {
        messageLeft[i].style.backgroundColor = "red";
        messageLeft[i].style.color = "white";
    }
}

function brownBlue() {
    for (let i = 0, max = messageLeft.length; i < max; i++) {
        messageRight[i].style.backgroundColor = "lightblue";
        messageRight[i].style.color = "black";
    }
    for (let i = 0, max = messageLeft.length; i < max; i++) {
        messageLeft[i].style.backgroundColor = "burlywood";
        messageLeft[i].style.color = "black";
    }
}

//add mew message

var sendBtn = document.getElementById("send");
var sendInput = document.getElementById("input");
var messages = document.getElementsByClassName("messages");

let count = 0;
sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var newDiv = document.createElement("div");
    count++;
    if (count % 2 === 0) {
        newDiv.classList.add("left", "message");
    } else {
        newDiv.classList.add("right", "message");
    }
    newDiv.textContent = sendInput.value;
    messages[0].append(newDiv);
    if (myTheme.value === "theme-one"){
        brownBlue()
    }else{
        redBlack()
    }
    if (sendInput.value === ""){    
        newDiv.style.backgroundColor = "white"
    }
    sendInput.value = "";
});


