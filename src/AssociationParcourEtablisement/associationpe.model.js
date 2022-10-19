const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const associationpeSchema = new Schema(
  {
    etablisementId: { type: String, unique: true, required: true },
    parcourId: { type: String, unique: true, required: true },
   
   
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const associationpe = mongoose.model("associationpe", associationpeSchema);
module.exports = associationpe;



