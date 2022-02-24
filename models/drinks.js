const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config//config');

// create post model
class Drink extends Model{}

// create fields/columns for Post model
Drink.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      ingredients: {
        type: DataTypes.JSON,
        allowNull: false
      },
      glass_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      instructions: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'drinks'
    }
  );
  
  module.exports = Drink;