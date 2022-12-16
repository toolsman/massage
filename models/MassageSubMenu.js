const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const MassageSubMenu = sequelize.define("medi_05_massage_submenu", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },

  desc: {
    type: DataTypes.STRING,
  },

  happyEnding: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = MassageSubMenu;
