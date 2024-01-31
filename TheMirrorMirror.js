// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
let ourString="Imagine you have a string, and you need to create a new string that is a mirror image of the original"

let arrayOfString=ourString.split(' ')
// console.log(arrayOfString)
// console.log(arrayOfString.reverse())
let reversedString =arrayOfString.reverse().join(" ")
// console.log(reversedString)
console.log(ourString +" "+ reversedString)