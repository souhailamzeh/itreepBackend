const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const parcoursController = require("../src/Parcours/parcours.controller");


router.post("/parcoursPost", cleanBody, parcoursController.parcoursPost);
router.get("/parcoursGetAll", parcoursController.parcoursGetAll);
//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;
