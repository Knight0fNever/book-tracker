const Sequelize = require('sequelize');
const sequelize = new Sequelize('BOOK-TRACKER', 'root', 'Trumpet0612!', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});