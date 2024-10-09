const myLibrary = [
    {
        index: 0,
        title: 'The Fellowship of the Ring',
        author: 'J.R.R Tolkien',
        numOfPages: 464,
        read: true,
        enabled: true,
    },
    {
        index: 1,
        title: 'Rhythm of War',
        author: 'Brandon Sanderson',
        numOfPages: 1232,
        read: true,
        enabled: true,
    },
    {
        index: 2,
        title: 'The Problem of Pain',
        author: 'C.S. Lewis',
        numOfPages: 176,
        read: true,
        enabled: true,
    },
    {
        index: 3,
        title: 'Agency',
        author: 'William Gibson',
        numOfPages: 418,
        read: false,
        enabled: true,
    },
];
const addBtn = document.getElementById('add-button');
const cardContainer = document.getElementById('card-container');
let removeBtn = Array.from(document.getElementsByClassName('remove-button'));
let readBtn = Array.from(document.getElementsByClassName('read-button'));

function Book(index, title, author, numOfPages, read, enabled) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
    this.enabled = enabled;
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
    book.setAttribute('id', ('card'+ libraryBook.index));
    title.setAttribute('class', 'title');
    author.setAttribute('class', 'author');
    pages.setAttribute('class', 'number-of-pages');
    read.setAttribute('class', 'read');
    read.setAttribute('id', ('read'+libraryBook.index));
    btnContainer.setAttribute('class', 'buttons');
    readBtn.setAttribute('class', 'read-button');
    readBtn.setAttribute('id', ('read-button'+libraryBook.index));
    removeBtn.setAttribute('class', 'remove-button');
    removeBtn.setAttribute('id', ('remove'+libraryBook.index));

    //  Add book info from the current library array entry to p elements
    title.textContent = 'Title: ' + libraryBook.title;
    author.textContent = 'Author: ' + libraryBook.author;
    pages.textContent = 'Pages: ' + libraryBook.pages;
    read.textContent = 'Read: ';
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

function displayBooks(){
    //  Iterate through each current book in library and call create book card function to build library on page
    for(i in myLibrary) {
        if (myLibrary[i].enabled) {
            createBookCard(myLibrary[i]);
        }
    }
}

displayBooks();

addBtn.addEventListener('click', ()=> {
    let book = new Book(
        (myLibrary.length),
        document.getElementById('title-field').value,
        document.getElementById('author-field').value,
        document.getElementById('pages').value,
        document.getElementById('read').checked,
        true
    );
    event.preventDefault();
    addBookToLibrary(book);
    createBookCard(book);
});

//  Create remove buttons
removeBtn = Array.from(document.getElementsByClassName('remove-button'));
removeBtn.forEach ((button) => {
    button.addEventListener('click', () => {
        let index = button.getAttribute('id').slice(6);
        myLibrary[index].enabled = false;
        let cardId = 'card' + index;
        const card  = document.getElementById(cardId);
        card.remove();
    });
});


//  Create read toggle buttons
readBtn = Array.from(document.getElementsByClassName('read-button'));
readBtn.forEach ((button) => {
    button.addEventListener('click', () => {
        let index = button.getAttribute('id').slice(11);
        console.log(index);
        let paragraphId = 'read' + index;
        const read = document.getElementById(paragraphId);
        if (myLibrary[index].read) {
            myLibrary[index].read = false;
            read.textContent = "Read: No";
        } else {
            myLibrary[index].read = true;
            read.textContent = "Read: Yes";
        }
        console.log(`${myLibrary[index].title} has been read: ${myLibrary[index].read}`)
    });
});