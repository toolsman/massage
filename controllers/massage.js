const axios = require("axios");
const Massage = require("../models/Massage");
const MassageSubMenu = require("../models/MassageSubMenu");

exports.massageMenu = async (req, res) => {
  try {
    const massages = await Massage.findAll({
      include: [
        {
          model: MassageSubMenu,
        },
      ],
    });
    return res.status(200).json({
      isSuccess: true,
      msg: "massaages fetched",
      massages,
    });
  } catch (error) {
    return res.status(400).json({
      isSuccess: false,
      msg: "unable to fetch massaages",
    });
  }
};

exports.massageMenuDetails = async (req, res) => {};

exports.createMassageMenu = async (req, res) => {
  const { name, happyEnding, subMenu } = req.body;
  try {
    const newMassage = await Massage.create({ name, happyEnding });
    const news = subMenu.map((item, index) => ({
      ...item,
      medi01MassageId: newMassage.id,
    }));
    await MassageSubMenu.bulkCreate(news);
    return res.status(200).json({
      isSuccess: true,
      msg: "created",
    });
  } catch (error) {
    return res.status(400).json({
      isSuccess: false,
      msg: "unable to create",
    });
  }
};
