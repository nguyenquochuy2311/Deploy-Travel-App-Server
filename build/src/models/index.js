'use strict';

var fs = require('fs');

var path = require('path');

var Sequelize = require('sequelize');

var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';

var config = require(__dirname + '/../config/config.json')[env];

var dbConfig = require("../config/db.config.js");

var db = {};

require('dotenv').config();

var sequelize; //node sequelize

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
} // docker sequelize
// sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     port: dbConfig.port,
//     operatorsAliases: false,
//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// });


fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);

  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;