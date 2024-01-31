// this one will follow all the instructions given in the question.
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
for (const student of studentName) {
    if(student.length<6){
    houses.push("Gryffindor")
}
    else if (student.length<8){
        houses.push("Hufflepuff")
    }
    else if (student.length<12){
        houses.push("Ravenclaw")
    }
    else if(student.length>=12){
        houses.push("Slythrin")
    }
}
console.log(houses)
