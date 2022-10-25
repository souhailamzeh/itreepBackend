const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const parcoursSchema = new Schema(
  {
    parcoursId: { type: String, required: true },
    nameparcours:[String],
    typeBac: [{type:{ type: String, required: false }, score:{ type: String,  required: true }}],

   
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



