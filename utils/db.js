const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.isDevelopment ? config.developement_db : config.production_db
);

module.exports = sequelize;
