const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'admin','root',{
    host: '127.0.0.1',
    port: '3307',
    dialect: 'mysql'
});

module.exports = connection;