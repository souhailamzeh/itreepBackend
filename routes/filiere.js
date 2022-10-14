const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const filiereController = require("../src/Filiere/filiere.controller");


router.post("/filierePost", cleanBody, filiereController.filierePost);
router.get("/filiereGetAll", filiereController.filiereGetAll);
//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;
