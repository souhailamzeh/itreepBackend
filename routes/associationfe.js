const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const associationfeController = require("../src/AssociationFiliereEtablisement/associationfe.controller");


router.post("/associationfePost", cleanBody, associationfeController.associationfePost);
//router.get("/associationfeGetAll", associationfeController.associationfeGetAll);
//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;
