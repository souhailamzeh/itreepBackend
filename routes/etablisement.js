const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const etablisementController = require("../src/etablisement/etablisement.controller");


router.post("/etablisementPost", cleanBody, etablisementController.etablisementPost);
//router.get("/sectionGetAll", SectionController.sectionGetAll);




module.exports = router;
