export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the title for your meal',
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter the amount for the meal',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter description for the meal',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please input a quantity in stock for the meal',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      },
    },
  }, {});
  Meal.associate = (models) => {
    // associations can be defined here
    Meal.belongsTo(models.User, {
      foreignkey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Meal;
};
