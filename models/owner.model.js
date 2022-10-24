const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const Owner = sequelize.define('owner', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
  username: {type: DataTypes.STRING},
});
module.exports = Owner;
