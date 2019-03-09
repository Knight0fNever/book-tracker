const Sequelize = require('sequelize');
const db = require('../db/index');

const Publisher = db.define('publisher', {
  name: {
    type: Sequelize.STRING
  }
});

Publisher.sync({force: false}).then(() => {
  // Table created
  console.log('Publisher table initialized');
});

module.exports = Publisher;