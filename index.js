const Book = require('./models/Book');
const Author = require('./models/Author');

//force: true will drop the table if it already exists
// Book.sync({force: true}).then(() => {
//   // Table created
//   return Book.create({
//     title: 'Harry Potter and the Order of the Phoenix',
//     author: 'J.K. Rowling',
//     datePublished: '06/21/2003',
//     isbn: '',
//     msrp: 14.99,
//     edition: '1st',
//     pages: 547,
//     image: ''
//   });
// });
