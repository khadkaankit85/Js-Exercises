// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
const vowels=["a","e","i","o","u","A","E","I","O","U"]
let givenStr="You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels."
let vowelCount=0;
function vowelCounter(str){
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if(vowels.includes(element)){
            vowelCount++
        }
        
    }
    console.log("The Number of Vowel in the Provided String is: ",vowelCount)
}
vowelCounter(givenStr)