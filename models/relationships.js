const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type:DataTypes.STRING},
    username: {type:DataTypes.STRING}
})
const Place = sequelize.define('place', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    name: {type: DataTypes.STRING},
    discription: {type:DataTypes.STRING},
})
const Owner = sequelize.define('owner', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    username: {type: DataTypes.STRING}
})
const Card = sequelize.define('card', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    cardNumber: {type: DataTypes.STRING, unique: true}
})


User.hasMany(Card)
Card.belongsTo(User)

Place.hasMany(Card)
Card.belongsTo(Place)

Place.hasOne(Owner)
Owner.belongsTo(Place)

module.exports={
    User,
    Card,
    Owner,
    Place
}