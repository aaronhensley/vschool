// JS String Methods

// Methods are Functions
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp

// var name = "luke"

// toUpperCase & toLowerCase
// var uppercasedLuke = name.toUpperCase()
// console.log(uppercasedLuke)
// var lowercasedLuke = uppercasedLuke.toLowerCase()
// console.log(lowercasedLuke)

// concat
// var s = "s"
// var newName = name.concat(s)
// console.log(newName)

// split - turn a string into an array
// var animal = "tigergerger"
// var characterArr = animal.split("g")
// console.log(characterArr)

// slice => cut up string
// var phoneNumber = "6764567890" // "676-456-7890"
// var first3 = phoneNumber.slice(0, 3)
// var next3 = phoneNumber.slice(3, 6)
// var last4 = phoneNumber.slice(6)
// var phoneNumWithDashes = first3 + "-" + next3 + "-" + last4
// console.log(phoneNumWithDashes)

// indexOf = I need to know if the letter "a" occurs in a string
// var city = "New York City"
// var indexOfC = city.indexOf("!")
// console.log(indexOfC)
function greetings() {
  const hello = "Hello";
  const upperHello = hello.toUpperCase();
  const lowerHello = hello.toLowerCase();
  const combinedHello = upperHello + lowerHello;
  return combinedHello;
}
console.log(greetings());

function findMiddleIndex() {
  const hello = "Hello";
  const helloArray = hello.split("");
  const middleIndex = [Math.floor(helloArray.length / 2)];
  return middleIndex;
}
console.log(findMiddleIndex());

function firstHalf() {
  const hello = "Hello World";
  const helloArray = hello.split("");
  const middleIndex = [Math.floor(helloArray.length / 2)];
  const spliceIt = helloArray.slice(0, middleIndex);
  const putItTogether = spliceIt.join("");
  return putItTogether;
}
console.log(firstHalf());

function upperLower() {
  const hello = "Hello World";
  const helloArray = hello.split("");
  const middleIndex = [Math.floor(helloArray.length / 2)];
  const spliceIt = helloArray.slice(0, middleIndex);
  const slice1 = spliceIt.join("");
  const spliceIt2 = helloArray.slice(middleIndex);
  const slice2 = spliceIt2.join("");
  const changeSize = slice1.toUpperCase();
  const keepSmall = slice2.toLowerCase();
  const newArr = changeSize.concat(keepSmall);

  return newArr;
}
console.log(upperLower());

function capitalLetter(){
  const sentence = "hey friends! practice practice practice!"
  const split1 = sentence.split("")

  return split1
}
console.log(capitalLetter())
