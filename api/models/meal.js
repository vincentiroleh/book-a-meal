'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
  };
  return Meal;
};