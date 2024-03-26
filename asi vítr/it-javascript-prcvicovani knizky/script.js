let bookArray = []
let output = document.getElementById("kniha")
 
 
function addBook(){
    let book = {
        názevknihy: "",
        autorknihy: "",
        žánrknihy: "",
        rokvydáníknihy: "",
 
 
    }
 
 
    book.názevknihy = document.getElementById("bookName").value
    book.autorknihy = document.getElementById("bookAuthor").value
    book.žánrknihy = document.getElementById("bookGenre").value
    book.rokvydáníknihy = document.getElementById("bookuPublishedYear").value
 
 
    bookArray.push(book)
 
    displaybooks()
}
 
function displaybooks() {
    console.log(bookArray)
   
 
 
 
 for(let i= 0; i < bookArray.length; i++){
 
    output.innerHTML += "název knihy:" + " " + bookArray[i].názevknihy + ". autor knihy:" + " " + bookArray[i].autorknihy + ". žánr knihy:" + " " + bookArray[i].žánrknihy + ". rok vydání knihy:" + " " + bookArray[i].rokvydáníknihy + "."
 
 
 }
 
}