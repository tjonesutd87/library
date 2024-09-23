const myLibrary = [];
const addBtn = document.getElementById("add-button");

function Book(index, title, author, numOfPages, read) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
    this.info = function() {
       return this.read ? `${this.title} by ${this.author}, ${this.numOfPages} pages, read.` : `${this.title} by ${this.author}, ${this.numOfPages} pages, not read.`;
    }
}

function addBookToLibrary() {
    addBtn.addEventListener(click, ()=> {
        let book = new Book(
            myLibrary.length,
            document.getElementById('title'),
            document.getElementById('author'),
            document.getElementById('number-of-pages'),
            document.getElementById('read')
        );
        event.preventDefault();
    });
    myLibrary = myLibrary.push(book)
}


console.log(myLibrary);