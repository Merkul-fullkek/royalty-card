const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const Place = sequelize.define('place', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
  name: {type: DataTypes.STRING},
  discription: {type: DataTypes.TEXT},
});
module.exports = Place;
