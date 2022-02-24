module.exports = function (sequelize, DataTypes) {
  const Comment = sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      drink_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "drinks",
          key: "id",
        },
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: "comments",
    }
  );

  // Example.associate = function (models) {
  //   Example.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Comment;
};

