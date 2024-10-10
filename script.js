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
const bookAddBtn = document.getElementById('book-add');
const cardContainer = document.getElementById('card-container');
const wrapper = document.getElementById('wrapper');
let bookFormActive = false;

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
    pages.textContent = 'Pages: ' + libraryBook.numOfPages;
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

function createCardButtons() {
    //  Create remove buttons
    let removeBtn = Array.from(document.getElementsByClassName('remove-button'));
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
    let readBtn = Array.from(document.getElementsByClassName('read-button'));
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
}

createCardButtons();

//  create an add book form from clicking the add new book button
bookAddBtn.addEventListener('click', ()=> {
    //  check if the book form modal is already on the screen, run function if not, else do nothing
    if (!bookFormActive){

        //  set book form active toggle to true, preventing further book forms from coming onto the screen while this one is still on the screen
        bookFormActive = true;
        //  initialize variables for each element
        let formContainer = document.createElement('div');
        let form = document.createElement('form');
        let formDiv = document.createElement('div');
        let titleLabel = document.createElement('label');
        let titleInput = document.createElement('input');
        let authorLabel = document.createElement('label');
        let authorInput = document.createElement('input');
        let numOfPagesLabel = document.createElement('label');
        let numOfPagesInput = document.createElement('input');
        let readLabel = document.createElement('label');
        let readInput = document.createElement('input');
        let readContainer = document.createElement('div');
        let readSpan = document.createElement('span');
        let addBtn = document.createElement('button');
        let closeBtn = document.createElement('button')
        let formTitle = document.createElement('p');

        //  set attributes on all the elements
        formContainer.setAttribute('id', 'book-form-container');
        formDiv.setAttribute('id', 'form-div');
        formTitle.textContent = 'Enter Book Details:';
        formTitle.setAttribute('id', 'form-title');
        form.setAttribute('id', 'book-form');
        form.setAttribute('action', '/');
        form.setAttribute('method', 'post');
        titleLabel.setAttribute('for', 'title-field');
        titleLabel.textContent = 'Title';
        titleInput.setAttribute('id', 'title-field');
        titleInput.setAttribute('name', 'title-field');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('required', 'required');
        authorLabel.setAttribute('for', 'author-field');
        authorLabel.textContent = 'Author';
        authorInput.setAttribute('id', 'author-field');
        authorInput.setAttribute('name', 'author-field');
        authorInput.setAttribute('type', 'text');
        authorInput.setAttribute('required', '');
        numOfPagesLabel.setAttribute('for', 'pages');
        numOfPagesLabel.textContent = 'Number of Pages';
        numOfPagesInput.setAttribute('id', 'pages');
        numOfPagesInput.setAttribute('name', 'pages');
        numOfPagesInput.setAttribute('type', 'tel');
        numOfPagesInput.setAttribute('required', '');
        readLabel.setAttribute('for', 'read');
        readLabel.setAttribute('class', 'container');
        readLabel.textContent = 'Read?';
        readInput.setAttribute('id', 'read');
        readInput.setAttribute('name', 'read');
        readInput.setAttribute('type', 'checkbox');
        readInput.setAttribute('required', '');
        readSpan.setAttribute('class', 'checkmark');
        addBtn.setAttribute('id', 'add-button');
        addBtn.setAttribute('type', 'submit');
        addBtn.textContent = 'Add';
        closeBtn.setAttribute('id', 'close-button');
        closeBtn.textContent = 'X';

        // add elements to dom tree
        console.log(wrapper);
        wrapper.appendChild(formContainer);
        formContainer.appendChild(formTitle);
        formContainer.appendChild(closeBtn);
        formContainer.appendChild(formDiv);
        formDiv.appendChild(form);
        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(authorLabel);
        form.appendChild(authorInput);
        form.appendChild(numOfPagesLabel);
        form.appendChild(numOfPagesInput);
        form.appendChild(readContainer);
        readContainer.appendChild(readLabel);
        readLabel.appendChild(readInput);
        readLabel.appendChild(readSpan);
        form.appendChild(addBtn);

        //  functionality for add new book button
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
            createCardButtons();
            formContainer.remove();
            bookFormActive = false;
        });

        //  functionality for close button
        closeBtn.addEventListener('click', ()=>{
            formContainer.remove();
            bookFormActive = false;
        });
    }
});

