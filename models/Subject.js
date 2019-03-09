const Sequelize = require('sequelize');
const db = require('../db/index');

const Subject = db.define('subject', {
  name: {
    type: Sequelize.STRING
  }
});

Subject.sync({force: false}).then(() => {
  // Table created
  console.log('Subject table initialized');
});

module.exports = Subject;