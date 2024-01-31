// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
let ourString="Imagine you have a string, and you need to create a new string that is a mirror image of the original"
let reversedString=''


function reverser(str){
    for (let i= (str.length-1); i >= 0; i--) {
    reversedString+=str[i]
    }
    console.log(str+" "+reversedString)

}
reverser(ourString)