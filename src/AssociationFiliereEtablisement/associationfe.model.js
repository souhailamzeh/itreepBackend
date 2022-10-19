const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const associationfeSchema = new Schema(
  {
    etablisementId: { type: String, unique: true, required: true },
    filiereId: { type: String, unique: true, required: true },
   
   
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const associationfe = mongoose.model("associationfe", associationfeSchema);
module.exports = associationfe;



