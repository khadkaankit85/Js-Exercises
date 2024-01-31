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
