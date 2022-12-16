const express = require("express");

//Express router
const router = express.Router();

//Controller
const massagesController = require("../controllers/massage");

router.get("/massage", massagesController.massageMenu);
router.get("/massage/id", massagesController.massageMenuDetails);
router.post("/massage", massagesController.createMassageMenu);

module.exports = router;
