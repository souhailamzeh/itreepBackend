const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const domaineSchema = new Schema(
  {
    domaineId: { type: String, unique: true, required: true },
    namedomaine: { type: String, unique: true, required: true },
   
   
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const domaine = mongoose.model("domaine", domaineSchema);
module.exports = domaine;



