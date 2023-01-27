const readline = require("readline-sync");
const name = readline.question("What is your name? ");

const actions = ["search", "open", "insert hand", "talk to ghost"]

let isAlive = true 
let hasKey = false
let hasEscaped = false
let response 




if (readline.keyInYN("You wake up in a mysterious room and can't identify your surroundings. Do you want to look around?")){
    console.log('You find yourself in a room with nothing excpet a hole in the floor and a door and a few small rocks.')
}else 
    console.log('You lay back down and wake up an hour later to investigate.')
    console.log('You find yourself in a room with nothing excpet a hole in the floor and a door and a few small rocks.')


while(isAlive === true && hasEscaped === false){
    index = readline.keyInSelect(actions, 'What do you want to do?')
    if(actions[index] === "search"){
        hasKey = true
        response = ('You found the key!')
    }else if(actions[index] === "insert hand"){
        isAlive = false
        response= ('YOU HAVE DIED!')
    }else if(actions[index] === "open" && hasKey === false){
        response= ('You need the key')
    }else if(actions[index] === "open" && hasKey === true){
        hasEscaped = true
        response = ('You have Escaped')
    }else if (actions[index] === "talk to ghost"){
        response = ("OOOOOOOOOOOOOOOO (You couldn't tell if he was trying to help or be scary. Either way you got no info.)")
    }
    console.log(response)

}





















