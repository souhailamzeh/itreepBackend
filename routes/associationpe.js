const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const associationpeController = require("../src/AssociationParcourEtablisement/association.controller");


router.post("/associationpePost", cleanBody, associationpeController.associationpePost);
router.get("/associationpeGetAll", associationpeController.associationpeGetAll);
//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;
