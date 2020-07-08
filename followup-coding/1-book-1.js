// Constructor implimented
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
// Inherit Prototype Magazine into Book
Magazine.prototype = Object.create(Book.prototype);

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

////////////////////////////////////////////////////////////////////// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
};



// Imstantiate Magazine Object
const mag1 = new Magazine('Mag one', 'somhin', '2018', 'Jan');