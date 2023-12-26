function ReadingStatusBook(title, author, readingStatus) {
    this.author = author;
    this.title = title;
    this.readingStatus = readingStatus;

    this.getReadingStatus = function () {
        if (this.readingStatus === true || this.readingStatus.toLowerCase() === 'true') {
            return document.getElementById("readingStatusBook").innerHTML = `Already read '${this.title}' by ${this.author}`;
        } else if (this.readingStatus === false || this.readingStatus.toLowerCase() === 'false') {
            return document.getElementById("readingStatusBook").innerHTML = `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
}

let bookTitle = prompt("Enter book title: ");
let bookAuthor = prompt("Enter book author: ");
let bookReadingStatus = prompt("Enter the reading status of the book:");

let book = new ReadingStatusBook(bookTitle, bookAuthor, bookReadingStatus);

book.getReadingStatus();

