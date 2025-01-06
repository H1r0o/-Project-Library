const bookShelf = document.querySelector("#bookDisplay"); // Div w którym wyświetlane są karty objektów
const addBookBtn = document.querySelector("#addBook"); // Przycisk umożliwiający dodanie nowego objektu / książki
const formDisplay = document.querySelector("#formDiv"); // Div w którym wyświetlany jest form umożliwiający dodanie nowego objektu

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // the constructor
}

function addBookToLibrary() {
    myLibrary.push(new Book("Wykonawcy Bożego Zamysłu", "Zoran Krusvar", 423, false))
    // do stuff here
}
addBookBtn.addEventListener("click", () => {
    formDisplay.style.display = "block";
})

addBookToLibrary();
console.log(myLibrary)