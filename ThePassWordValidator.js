// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
// I am gonna write everything manually once
let password="tPghgccnnbnb1"
let uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
function lengthCounter(num){
    if(num.length>8){
        console.log("Valid length")
        return true
    }
    else{
        console.log("too short")
    }
}

function hasDigit(num){
    for (let index = 0; index < num.length; index++) {
        let element = num[index];
        if(digits.includes(element)){
            return true;
        
    }
    }
}
function hasCaps(num){
    for (let index = 0; index < num.length; index++) {
        let element = num[index];
        if(uppercaseLetters.includes(element)){
            return true;
        
    }
    }
}
function hasSmall(num){
    for (let index = 0; index < num.length; index++) {
        let element = num[index];
        if(lowercaseLetters.includes(element)){
            return true;
        
    }
    }
}
if (hasDigit(password)){
    console.log("it has digits")
}
else{
    console.log("no digits found, Invalid password")
}

if (hasCaps(password)){
    console.log("it has capital letters")
}
else{
    console.log("NO capital letter found which makes the password invalid")
}

if (hasSmall(password)){
    console.log("It has small letters")
}
else{
    console.log("No small letter found so the password is invalid")
}

function passwordValidator(){
    if ((hasSmall(password) && hasCaps(password) &&hasDigit(password) &&lengthCounter(password))){
        console.log("valid password")
    }
    else{
        console.log("Some requirements were not met")
    }
}
passwordValidator()
//this took alot of time so i am not using ascii rn. maybe later