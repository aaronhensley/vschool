// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for(var i = 0; i < officeItems.length; i++){
//     console.log(officeItems.length)
// }
// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ]
//   for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//       if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
//           console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " not old enough");
//           }else {
//               console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
//           }
//       }
// var myHead = document.getElementById("head")
// var numbersArray = [1, 5, 1, 1, 183, 1,  22, 5498]

// var sum = 0;

// for(var i = 0; i < numbersArray.length; i++){
//   sum += numbersArray[i];
// }
// // console.log(sum)
// if(sum % 2 === 0){
//   var newDiv = document.createElement("div")
//   newDiv.textContent = "The Light is on"
//   myHead.append(newDiv)
  
// } else{
//   var newDiv = document.createElement("div")
//   newDiv.textContent = "The Light is off"
//   myHead.append(newDiv)
// }
// const myNumbers = []

// for(i = 0; i <= 9; i++){
//   myNumbers.push([i])
//   console.log(myNumbers[i])
// }

// for(i = 9; i > 0; i-=1 ) {
//   console.log([i])
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]
// for(i = 0; i < fruit.length; i++){
//   console.log(fruit[i])
// }
// for(i = 0; i < 100; i++){
//   if(i % 2===0){
//     console.log([i])
//   }
// }
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// const newFruit = []


// for(i = 0; i < fruit.length; i++ ) {
//   if(i % 2 === 0){
//     newFruit.push(fruit[i])
//     // console.log(fruit[i])
//   }
// }
// console.log(newFruit)

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

const peopleNames = []

const poepleOcupation = []

const newPeople = []

const newOcupation = []

for(i = 0; i < peopleArray.length; i++){
  // console.log(peopleArray[i].name)
  peopleNames.push(peopleArray[i].name)
  poepleOcupation.push(peopleArray[i].occupation)
  if(i % 2 === 0){
    newPeople.push(peopleArray[i].name)
  } else {
    newOcupation.push(peopleArray[i].occupation)
  }
}
console.log(peopleNames)
console.log(poepleOcupation)
console.log(newPeople)
console.log(newOcupation
  )



