const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const randonneSchema = new Schema(
  {
    randonneId: { type: String, unique: true, required: true },
    namerandonne: { type: String, unique: true, required: true },
    adresserandonne: { type: String, unique: true, required: true },
    imagerandonne: { type: String, unique: true, required: true },
    tarifrandonne: { type: String, unique: true, required: true },
    ratingrandonne: { type: String, unique: true, required: true },
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



