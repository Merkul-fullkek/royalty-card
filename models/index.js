const sequelize = require('../db');
const User = require('./user.model');
const Card = require('./card.model');
const Owner = require('./owner.model');
const Place = require('./place.model');

User.hasMany(Card);
Card.belongsTo(User);

Place.hasMany(Card);
Card.belongsTo(Place);

Place.hasOne(Owner);
Owner.belongsTo(Place);

module.exports = {
  User,
  Place,
  Card,
  Owner,
};
