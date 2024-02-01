// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
let numList=[1,2,3,4,-5,6,-8,2,-10,2,20,-1,41,8,5]
let sum=0
for (let index = 0; index < numList.length; index++) {
    let element = numList[index];
    if(element>=0){
        sum+=element
    }
    if(element<0){
        break;
    }
    
}
console.log(sum)