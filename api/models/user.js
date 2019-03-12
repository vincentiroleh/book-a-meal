module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Meal, {
      foreignkey: 'UserId',
      onDelete: 'CASCADE'
    });
  };
  return User;
};