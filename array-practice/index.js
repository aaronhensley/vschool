// push - adds item(s) to the end of the array
    // arrOfFoods.push("cereal")
    // console.log(arrOfFoods)

// pop - removes item from the end of the array
    // arrOfFoods.pop()
    // console.log(arrOfFoods)

// unshift - adds item(s) to the beginning of the array
    // arrOfFoods.unshift("cereal")
    
// shift - removes item from the beginning of the array
    // arrOfFoods.shift()
    // console.log(arrOfFoods)

// concat - puts multiple arrays into
    // var colors1 = ["blue", "green"]
    // var colors2 = ["purple", "red"]
    // var newArr = colors1.concat(colors2)
    // console.log(newArr)
    
// indexOf
    // var pizzaIndex = arrOfFoods.indexOf("popcicle")
    // console.log(pizzaIndex)

// slice
    // var newArr = arrOfFoods.slice(1, 3)
    // console.log(arrOfFoods)

// join - Turns an array into a string
    // var name = "steve"
    // var splitName = name.split("")
    // var joinedName = splitName.join("")
    // console.log(joinedName)

// reverse
    // var name = "rick" // kcir
    // var splitName = name.split("")
    // var reversedArr = splitName.reverse()
    // var reversedName = reversedArr.join("")
    
    // var allAtOnce = name.split("").reverse().join("")
    // console.log(allAtOnce)
    
// splice - change the orignal array
  
    
    // arrOfFoods.splice(2, 2, "bacon", "ice cream")
    // console.log(arrOfFoods)

// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// vegetables.pop()

// fruit.shift()

// var orangeIndex = fruit.indexOf("orange")
// console.log(orangeIndex)
// fruit.push(orangeIndex)

// var vegIndex = vegetables.indexOf(vegetables.length)
// console.log(vegIndex)
// // food.push(vegIndex)


// var food = fruit.concat(vegetables)

// food.splice(4 ,2)

// var reverseFood = food.reverse()
// var joinFood = food.join(" ")

// console.log(vegetables)
// console.log(fruit)
// // console.log(vegetables.length)
// console.log(food)
// console.log(joinFood)

const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"

const newLetters = []

const splitLetters = alphabet.split
function combine(people, splitLetters){
    const combinedArray = []
for(i = 0; i < people.length; i++){
   
    for(j = 0; j < alphabet.length; j++){
        const returnArray = people[i].concat(splitLetters , ",")
        // console.log(returnArray)

        console.log(returnArray) 
    }
}
}
    
