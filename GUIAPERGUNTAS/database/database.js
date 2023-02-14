const Sequelize = require('sequelize');

const connection = new Sequelize('sistemaDeCadastro', 'admin','root',{
    host: '127.0.0.1',
    port: '3307',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;