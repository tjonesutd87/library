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

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}


addBtn.addEventListener('click', ()=> {
    let book = new Book(
        myLibrary.length,
        document.getElementById('title-field').value,
        document.getElementById('author-field').value,
        document.getElementById('pages').value,
        document.getElementById("read").checked
    );
    event.preventDefault();
    addBookToLibrary(book);
});

function displayBooks(){
    for(i in myLibrary) {
        console.log(myLibrary[i]); 
    }
}