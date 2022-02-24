// create our comments model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Stars extends Model {}

Drink.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      drink_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'stars'
    }
  );
  

module.exports = Stars

