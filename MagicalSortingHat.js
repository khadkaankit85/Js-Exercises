// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let studentName=[
    "John",
    "Jane",
    "Michael",
    "Emily",
    "Christopher",
    "Olivia",
    "William",
    "Sophia",
    "Daniel",
    "Isabella", "Angkit"]

let houses=[]
let stDetail={}
function houseSelector(){
    for (const student of studentName) {
        if(student.length<6){
            stDetail[student]="Gryffindor"
        }
        else if(student.length<8){
            stDetail[student]="Hufflepuff"
        }
        else if(student.length<12){
            stDetail[student]="Ravenclaw"
        }
        else if(student.length>=12){
            stDetail[student]="Slytherin"
        }
            
        
    }
    houses.push(stDetail)
    return houses;
    
}
let a=houseSelector()
console.log(a)
