module.exports = function (sequelize, DataTypes) {
  const Stars = sequelize.define(
    "Stars",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      starTotal: {
        type: DataTypes.INTEGER,
      },
      drink_id: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "drinks",
        //   key: "id",
        // },
      },
      user_id: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "users",
        //   key: "id",
        // },
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: "stars",
    }
  );

  // Example.associate = function (models) {
  //   Example.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Stars;
};

