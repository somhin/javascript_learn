// Basic Object Literals

// const book1 = {
//     title: 'I eat you up inside my head',
//     author: 'Mind Da Hed',
//     year: '2020',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// };

// const book2 = {
//     title: 'There',
//     author: 'Mai Supharutkit',
//     year: '2018',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// };

// console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));


// Constructor implimented
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

////////////////////////////////////////////////////////////////////// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
};
// ///////////////////////////////////////getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};
// ///////////////////////////////////////Revise - Change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate an Object to 'Book'
const book1 = new Book('I eat you up inside my head', 'Mind Da Hed', '2020');
const book2 = new Book('There', 'Mai Supharutkit', '2018');