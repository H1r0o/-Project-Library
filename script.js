const bookShelf = document.querySelector("#bookDisplay"); // Div w którym wyświetlane są karty objektów
const addBookBtn = document.querySelector("#addBook"); // Przycisk umożliwiający dodanie nowego objektu / książki
const formDisplay = document.querySelector("#formDiv"); // Div w którym wyświetlany jest form umożliwiający dodanie nowego objektu
const submitBook = document.querySelector("#submitBook");//Przycisk z formularza zatwierdzający dane
const cancelBook = document.querySelector("#cancelBook");// Przycisk z formularza anulujący dodawanie danych

const newTitle = document.getElementById("bookTitle") //Pozyskanie wartości z form
const newAuthor = document.getElementById("bookAuthor");
const newPages = document.getElementById("bookPages");
const newRead = document.getElementById("read");
const newColor = "rgb(215, 250, 250)";

const myLibrary = [];//Lista zawierająca wszystkie elementy


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.color = randomColor();
    //constructor
}

function newBook() {
    const newBookValue = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.checked)
    myLibrary.push(newBookValue);
    console.log(myLibrary);
    console.log("Btn ok")
    //Pozyskanie danych z formularza i dodanie ich do listy
}
function randomColor() {
    const randomBgColor1 = Math.floor(Math.random() * 255) + 1;
    const randomBgColor2 = Math.floor(Math.random() * 255) + 1;
    const randomBgColor3 = Math.floor(Math.random() * 255) + 1;
    return `rgb(${255}, ${randomBgColor2}, ${randomBgColor3})`;
}

function renderLibrary() {
    bookShelf.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        const bgColor = randomColor();
        bookCard.style.backgroundColor = book.color;
        bookCard.innerHTML = `
        <h2>Title: ${book.title}</h2>
        <h3>Author: ${book.author}</h3>
        <h3>Pages: ${book.pages}</h3>
        <h3>Read: ${book.read ? 'Yes' : 'No'}</h3>
        <button id="read">Read?</button>
        <button id="remove">Remove Item</button>`;
        bookShelf.appendChild(bookCard);
        //Wyświetlanie elementów w div bookShelf/ tworzenie elementów w zależności od długości listy

        const removeItem = bookCard.querySelector("#remove");
        removeItem.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            renderLibrary();
            //Usuwa element z listy
        })

        const readed = bookCard.querySelector("#read");
        readed.addEventListener("click", () => {
            book.read = !book.read;
            renderLibrary();
            //Zmienia opcję czy książka została przeczytana
        })
    })


}

submitBook.addEventListener("click", (e) => {
    e.preventDefault();
    const newbook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.checked);
    myLibrary.push(newbook);
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
    newRead.checked = false;
    console.log(myLibrary);
    formDisplay.style.display = "none";
    renderLibrary(); // Dodaje nową książkę a następnie usówa wartości aby przy dodawaniu następnych nie wystąpił błąd
});

addBookBtn.addEventListener("click", () => {
    formDisplay.style.display = "block";
}) //Przy pomocy przycisku "add book" wyświetla form 

cancelBook.addEventListener("click", () => {
    formDisplay.style.display = "none";
})//Przy pomocy przycisku "cancel" zamyka form

