const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const filiereSchema = new Schema(
  {
    filiereId: { type: String, unique: true, required: true },
    namefiliere: { type: String, unique: true, required: true },
   
   
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const filiere = mongoose.model("filiere", filiereSchema);
module.exports = filiere;



