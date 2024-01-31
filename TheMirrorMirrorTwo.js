// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
let ourString="Imagine you have a string, and you need to create a new string that is a mirror image of the original"
let reversedString=''
for (let i= (ourString.length-1); i >= 0; i--) {
    reversedString+=ourString[i]
    
}
console.log(ourString+" "+reversedString)