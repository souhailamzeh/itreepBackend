const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const parcoursSchema = new Schema(
  {
    parcoursId: { type: String, unique: true, required: true },
    nameparcours: { type: String, unique: true, required: true },
   
   
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const parcours = mongoose.model("parcours", parcoursSchema);
module.exports = parcours;



