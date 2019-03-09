const Sequelize = require('sequelize');
const db = require('../db/index');

const Book = db.define('book', {
  title: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  datePublished: {
    type: Sequelize.DATE
  },
  isbn: {
    type: Sequelize.STRING
  },
  msrp: {
    type: Sequelize.DECIMAL(13, 4)
  },
  edition: {
    type: Sequelize.STRING
  },
  pages: {
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.STRING
  }
});

Book.sync({force: false}).then(() => {
  // Table created
  console.log('Book table initialized');
});

module.exports = Book;