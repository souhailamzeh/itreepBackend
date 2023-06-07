const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const reservationrandonneSchema = new Schema(
  {
    reservationrandonneId: { type: String, unique: true, required: true },
    datedepart: { type: String, unique: true, required: true },
    datearrive: { type: String, unique: true, required: true },
    typelogement: { type: String, unique: true, required: true },
    paiement: { type: String, unique: true, required: true },
    statu: { type: String, unique: true, required: false },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const reservationrandonne = mongoose.model("reservationrandonne", reservationrandonneSchema);
module.exports = reservationrandonne;



