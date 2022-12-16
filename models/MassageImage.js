const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const MassageImage = sequelize.define("medi_03_massage_image", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
  },
});

module.exports = MassageImage;
