const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const sectionSchema = new Schema(
  {
    sectionId: { type: String, unique: true, required: true },
    nameSection: { type: String, unique: true, required: true },
    matieres: [{nameMatiere:{ type: String, required: true }, coff:{ type: Number, unique: true, required: true }}],
   
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const section = mongoose.model("section", sectionSchema);
module.exports = section;



