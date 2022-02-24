module.exports = function (sequelize, DataTypes) {
  const Drink = sequelize.define(
    "Drink",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true,
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      glass_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instructions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: "drinks",
    }
  );

  // Example.associate = function (models) {
  //   Example.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Drink;
};
