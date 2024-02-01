if (localStorage.getItem('username')){
//first checking if we already have the value for that keyword

// if we do we gonna getItem from local storage
    let name=localStorage.getItem('username')
    //and gonna write it
    document.getElementById("myText").innerText="Hello "+ name+ " how are you?"
}
else{
    //if we dont have it in local storage we gonna ask for input
    let name =prompt("Enter your name please")
    //saving item in local storage as key value pair
    localStorage.setItem('username',name)
    document.getElementById("myText").innerText="Hello "+ name+ " how are you?"

}