const readline = require("readline-sync");
const name = readline.question("What is your name?")

const regularActions = ["Walk", "Don't Walk", "Inventory", "Give Up?"]

const combatActions = ["Run", "Attack"]

const attack = ["Attack"]

const enemies = [
    {
        type: "Goblin",
        hp: 3
    },
    {
        type: "Skeleton",
        hp: 4
    },
    {
        type: "Zombie",
        hp: 6
    }
    
    ]

let isAlive = true

let inBattle = false

let attacking = false

const player = {Name: name,
                hp: 6,
                Items: []

}

if (player.hp <= 0){
    console.log("You're Dead!")
    isAlive = false
}



while(inBattle === true){
    enemeyBattle()
}

while(attacking === true){
    combatDamage()
}





function enemeyBattle(){
    inBattle = true
    const diceRollEnemie = enemies[Math.floor(Math.random()*enemies.length)].type
    console.log("You encountered a " + diceRollEnemie)
    index = readline.keyInSelect(combatActions, "What will you do next?")
    if (combatActions[index] === "Run"){
        const diceRollDamage = Math.floor(Math.random() * 2 + 1)
        const playerDamage = player.hp = player.hp - diceRollDamage
        const diceRollEscape = Math.floor(Math.random() * 2 + 1)
        

        console.log(diceRollEscape)
        if (diceRollEscape === 1){
            console.log("You Escaped")
            inBattle = false
        }else {
            console.log("You could not escape")
            console.log("You took " + diceRollDamage + " damage! " + " HP Left:", playerDamage)
            enemeyBattle()
        }
        console.log("You took " + diceRollDamage + " damage! " + " HP Left:", playerDamage)

        if (player.hp <= 0){
            console.log("You're Dead!")
            isAlive = false
        }

    }else if (combatActions[index] === "Attack"){
        function combatDamage(){
            attacking = true
            const heroStrength = Math.floor(Math.random() * 3 + 1)
            console.log(heroStrength)
            index = readline.keyInSelect(attack, "Keep Fighting!")
            const enemyDamage = enemies.hp = enemies.hp - heroStrength
            console.log(enemies.hp)
            
        }
        
    }
    
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
        console.log("You're Dead!")
        isAlive = false
    }else if (regularActions[index] === "Walk"){
        enemeyChance()
    }else if (regularActions[index] === "Don't Walk"){
        console.log("You decided to lay back down and try again later.")
        console.log("What will you do next?")
    } 
    else if (regularActions[index] === "Inventory"){
        console.log(player)
    }
}

// Start

console.log("Hello Advneturer! You find yourself in the middle of an epic adventure and have finished resting for the night. You now are continuing on your quest.")
while(isAlive === true){
    walk()

}


