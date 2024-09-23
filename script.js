function Book(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
    this.info = function() {
       return this.read ? `${this.title} by ${this.author}, ${this.numOfPages} pages, read.` : `${this.title} by ${this.author}, ${this.numOfPages} pages, not read.`;
    }
}

const book1 = new Book("Dune", "Frank Herbert", 436, true);
const book2 = new Book("The Boy and His Horse", "C.S. Lewis", 378, false);

console.log(book1.info());
console.log(book2.info());