if(localStorage.getItem('noteId')){
    let note=localStorage.getItem('noteId')
    document.getElementById("myText").innerText=note
}
else{
    let note=prompt("Enter the note you wanna write.")
    localStorage.setItem('noteId',note)
    document.getElementById("myText").innerText=note
}