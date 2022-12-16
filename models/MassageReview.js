const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Massagereview = sequelize.define("medi_04_massage_review", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  body: {
    type: DataTypes.STRING,
  },
});

module.exports = Massagereview;
