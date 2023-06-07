const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const reservationcentreSchema = new Schema(
  {
    reservationcentreId: { type: String, unique: true, required: true },
    datedepart: { type: String, unique: true, required: true },
    datearrive: { type: String, unique: true, required: true },
    typelogement: { type: String, unique: true, required: true },
    paiement: { type: String, unique: true, required: true },
    statut: { type: String, unique: true, required: false },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const reservationcentre = mongoose.model("reservationcentre", reservationcentreSchema);
module.exports = reservationcentre;



