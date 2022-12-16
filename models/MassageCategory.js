const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const MassageCategory = sequelize.define("medi_02_massage_category", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  tag: {
    type: DataTypes.STRING,
  },

  desc: {
    type: DataTypes.STRING,
  },

  price: {
    type: DataTypes.INTEGER,
  },
});

module.exports = MassageCategory;
