const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type:DataTypes.STRING},
    username: {type:DataTypes.STRING}
})
module.exports= User