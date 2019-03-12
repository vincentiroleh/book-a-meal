module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
  	id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Order.associate = (models) => {
  };
  return Order;
};