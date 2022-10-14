const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const SectionController = require("../src/Score/section.controller");


router.post("/SectionPost", cleanBody, SectionController.SectionPost);
router.get("/sectionGetAll", SectionController.sectionGetAll);
router.post("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;
