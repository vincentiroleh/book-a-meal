module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
  	id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Menu.associate = (models) => {
    Menu.belongsTo(models.Meal, {
      foreignKey: 'MealId',
      onDelete: 'CASCADE'
    });
  };
  return Menu;
};