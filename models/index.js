// import all models
const Stars = require("./stars");
const Drink = require("./drinks");
const Comment = require("./comments");
const User = require ("./user");
const Stars = require("./stars");

// create associations
User.hasMany(Comment, {
  foreignKey: "user_id",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
});
Comment.belongsTo(Drink, {
  foreignKey: "drink_id",
});
Drink.hasMany(Comment, {
  foreignKey: "drink_id",
});
Stars.belongsTo(User, {
  foreignKey: 'user_id'
});

Stars.belongsTo(Drink, {
  foreignKey: 'post_id'
});

User.hasMany(Stars, {
  foreignKey: 'user_id'
});

Drink.hasMany(Stars, {
  foreignKey: 'drink_id'
});

module.exports = { User, Stars, Drink, Comment};










// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(path.join(__dirname, '/../config/config.js'))[env];
// const db = {};
// let sequelize;

// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
