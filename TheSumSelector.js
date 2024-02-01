// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
let mylist=[1,2,3,4,-5,6,-8,2,-10,2,20,-1,41,8,5]
let sum=0

function selectedSum(numList){
for (let index = 0; index < numList.length; index++) {
    let element = numList[index];
    if(element>=0){
        console.log(element)
        sum+=element
    }
    if(element<0){
        console.log("Negative number Detected :",element)
        break;
    }
    
}
console.log("The sum is :", sum)
}

selectedSum(mylist)