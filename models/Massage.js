const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const MassageCategory = require("./MassageCategory");
const MassageImage = require("./MassageImage");
const Massagereview = require("./MassageReview");
const MassageSubMenu = require("./MassageSubMenu");

const Massage = sequelize.define("medi_01_massage", {
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

Massage.hasMany(MassageImage, {
  onDelete: "CASCADE",
});

Massage.hasMany(MassageSubMenu, {
  onDelete: "CASCADE",
});

Massage.hasMany(MassageCategory, {
  onDelete: "CASCADE",
});

Massage.hasMany(Massagereview, {
  onDelete: "CASCADE",
});

module.exports = Massage;
