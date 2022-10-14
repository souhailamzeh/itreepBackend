const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const EtablisementSchema = new Schema(
  {
    etablisementId: { type: String, unique: true, required: true },
    nameEtablisement: { type: String, unique: true, required: true },
   
   
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const etablisement = mongoose.model("etablisement", EtablisementSchema);
module.exports = etablisement;



