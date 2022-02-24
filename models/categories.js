module.exports = function (sequelize, DataTypes) {
    const Category = sequelize.define(
      "Category",
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
          validate: {
            len: [1],
          },
        },
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "Category",
      }
    );
  
    // Example.associate = function (models) {
    //   Example.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Category;
  };
  
  