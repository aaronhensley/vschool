const readline = require("readline-sync");
const name = readline.question("What is your name?")

const regularActions = ["Walk", "Don't Walk", "Give Up?"]

const combatActions = ["Run", "Attack"]

let isAlive = true


function enemeyBattle(){

}
// Will an enemy appear?

function enemeyChance() {
const diceRoll = Math.floor(Math.random() * 4 + 1)
console.log(diceRoll)
if (diceRoll === 1 ){
    enemeyBattle()
} else {
    console.log("Nothing Happened. You moved on.")
}
}

// Walking Function

function walk (){
    index = readline.keyInSelect(regularActions, "What do you want to do?")
    if (regularActions[index] === "Give Up?"){
        console.log("You're Dead")
        isAlive = false
    }else if (regularActions[index] === "Walk"){
        enemeyChance()
    }else if (regularActions[index] === "Don't Walk"){
        console.log("You decided to lay back down and try again later.")
        console.log("What will you do next?")
    } 
}

// Start

console.log("Hello Advneturer! You find yourself in the middle of an epic adventure and have finished resting for the night. You now are continuing on your quest.")
while(isAlive === true){
    walk()

}

