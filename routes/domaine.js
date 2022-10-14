const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const domaineController = require("../src/Domaine/domaine.controller");


router.post("/domainePost", cleanBody, domaineController.domainePost);
router.get("/domaineGetAll", domaineController.domaineGetAll);
//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;
