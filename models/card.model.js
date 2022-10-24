const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const Card = sequelize.define('card', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
  cardNumber: {type: DataTypes.STRING, unique: true},
});
module.exports = Card;
