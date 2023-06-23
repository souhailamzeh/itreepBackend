const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const randonneSchema = new Schema(
  {
   git
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const randonne = mongoose.model("randonne", randonneSchema);
module.exports = randonne;



