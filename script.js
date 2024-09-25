const myLibrary = [
    {
        index: 0,
        title: 'The Fellowship of the Ring',
        author: 'J.R.R Tolkien',
        numOfPages: 464,
        read: true,
    },
    {
        index: 1,
        title: 'Rhythm of War',
        author: 'Brandon Sanderson',
        numOfPages: 1232,
        read: true,
    },
    {
        index: 2,
        title: 'The Problem of Pain',
        author: 'C.S. Lewis',
        numOfPages: 176,
        read: true,
    },
    {
        index: 0,
        title: 'Agency',
        author: 'William Gibson',
        numOfPages: 418,
        read: false,
    },
];
const addBtn = document.getElementById('add-button');
const cardContainer = document.getElementById('card-container');

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

function createBookCard(libraryBook){
    //  Create new elements for the card structure and the book info
    let book = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let read = document.createElement('p');
    let btnContainer = document.createElement('div');
    let readBtn = document.createElement('button');
    let removeBtn = document.createElement('button');

    // set class attribute on each new element for styling
    book.setAttribute('class', 'book-card');
    title.setAttribute('class', 'title');
    author.setAttribute('class', 'author');
    pages.setAttribute('class', 'number-of-pages');
    read.setAttribute('class', 'read');
    btnContainer.setAttribute('class', 'buttons');
    readBtn.setAttribute('class', 'read-button');
    removeBtn.setAttribute('class', 'remove-button');

    //  Add book info from the current library array entry to p elements
    title.textContent = 'Title: ' + libraryBook.title;
    author.textContent = 'Author: ' + libraryBook.author;
    pages.textContent = 'Pages: ' + libraryBook.pages;
    read.textContent = 'Read? ';
    if (libraryBook.read){
        read.textContent += 'Yes';
    } else {
        read.textContent += 'No';
    }
    readBtn.textContent = 'Mark Read';
    removeBtn.textContent = 'Remove';

    //  Append all the new elements onto parent elements to create the card on the page
    cardContainer.appendChild(book);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(btnContainer);
    btnContainer.appendChild(readBtn);
    btnContainer.appendChild(removeBtn);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBtn.addEventListener('click', ()=> {
    let book = new Book(
        myLibrary.length,
        document.getElementById('title-field').value,
        document.getElementById('author-field').value,
        document.getElementById('pages').value,
        document.getElementById('read').checked
    );
    event.preventDefault();
    addBookToLibrary(book);
    createBookCard(book);
});

function displayBooks(){
    //  Iterate through each current book in library and call create book card function to build library on page
    for(i in myLibrary) {
        createBookCard(myLibrary[i]);
    }
}

displayBooks();