const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db22", "root", "9068057586@@", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
