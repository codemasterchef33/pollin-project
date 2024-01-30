// models/Poll.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const QuestionSet = require("./question");

const Poll = sequelize.define("Poll", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  minReward: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxReward: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
Poll.hasMany(QuestionSet, { foreignKey: "id" });
module.exports = Poll;
