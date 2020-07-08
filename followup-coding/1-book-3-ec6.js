class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year} issue ${this.month}`
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// Instantiate Object
const book1 = new Book('Book One', 'somhin', '2018') ;

// test 
// book1.revise('2020')
// console.log(book1);

// console.log(Book.topBookStore());

////////////////////////////////////////////////////////////////////////////////////////
// Magazine Subclass

class Magazine extends Book {
    constructor (title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag one', 'somehin', '2018', 'Jan');

console.log(mag1.getSummary());