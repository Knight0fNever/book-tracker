const Sequelize = require('sequelize');
const db = require('../db/index');

const Author = db.define('author', {
  name: {
    type: Sequelize.STRING
  },
  dateOfBirth: {
    type: Sequelize.DATE
  }
});

Author.sync({force: false}).then(() => {
  // Table created
  console.log('Author table initialized');
});

module.exports = Author;