const Sequelize = require("sequelize");
const connection = require("../database/database");

//cria tabela chamada categories
const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    }

})

//Category.sync({force: true});

module.exports = Category;