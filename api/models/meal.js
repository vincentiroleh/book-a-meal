/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
  	id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: {
    			args: [3, 50],
    			msg: 'Your meal name must be between 3 and 50 characters. Please try again.',
    		},
    	},
    },
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  }, {});
  Meal.associate = (models) => {
    Meal.hasMany(models.Menu, {
      foreignKey: 'MealId',
      onDelete: 'CASCADE',
    });
    Meal.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE',
    });
  };
  return Meal;
};
