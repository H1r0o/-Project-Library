const bookShelf = document.querySelector("#bookDisplay"); // Div w którym wyświetlane są karty objektów
const addBookBtn = document.querySelector("#addBook"); // Przycisk umożliwiający dodanie nowego objektu / książki
const formDisplay = document.querySelector("#formDiv"); // Div w którym wyświetlany jest form umożliwiający dodanie nowego objektu
const submitBook = document.querySelector("#submitBook");//Przycisk z formularza zatwierdzający dane
const cancelBook = document.querySelector("#cancelBook");// Przycisk z formularza anulujący dodawanie danych

const newTitle = document.getElementById("bookTitle")
const newAuthor = document.getElementById("bookAuthor");
const newPages = document.getElementById("bookPages");

const myLibrary = [];//Lista zawierająca wszystkie elementy

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // the constructor
}

function addBookToLibrary() {
    myLibrary.push(new Book("Wykonawcy Bożego Zamysłu", "Zoran Krusvar", 423));
    // do stuff here
}

function newBook() {
    const newBookValue = new Book(newTitle.value, newAuthor.value, nwePages.value)
    myLibrary.push(newBookValue);
    console.log(myLibrary);
    console.log("Btn ok")
    //Pozyskanie danych z formularza i dodanie ich do listy
}

function renderLibrary() {
    bookShelf.innerHTML = "";
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <h3>${book.author}</h3>
        <h3>${book.pages}</h3>`;
        bookShelf.appendChild(bookCard);
    })
    //Wyświetlanie elementów w div bookShelf/ tworzenie elementów w zależności od długości listy
}


submitBook.addEventListener("click", (e) => {
    e.preventDefault();
    const newbook = new Book(newTitle.value, newAuthor.value, newPages.value);
    myLibrary.push(newbook);
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
    console.log(myLibrary);
    renderLibrary() // Dodaje nową książkę a następnie usówa wartości aby przy dodawaniu następnych nie wystąpił błąd
});

addBookBtn.addEventListener("click", () => {
    formDisplay.style.display = "block";
}) //Przy pomocy przycisku "add book" wyświetla form 

cancelBook.addEventListener("click", () => {
    formDisplay.style.display = "none";
})//Przy pomocy przycisku "cancel" zamyka form