// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

//note that it ignores only consecutive duplicates
let numbers=[1,1,5,7,6,8,9,10,18,18,15,15,7,7,6,7,5,4,9]
let doubledNumbers=[]
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if(number===numbers[i+1]){
        doubledNumbers.push(number)
    }
    else{
        doubledNumbers.push(number*2)
    }
    
}
console.log(doubledNumbers)