const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = 5000;

const authRoutes = require("./routes/users");
const centrecamping = require("./routes/camping");
const randonne = require("./routes/randonne");
const reservationcentre = require("./routes/reservationcentre");
const reservationrandonne = require("./routes/reservationrandonne");
const favorie = require("./routes/favorie");









mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "itreep",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection Success.");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  return res.send({
    error: false,
    message: "Server is healthy",
  });
});

app.use("/users", authRoutes);
app.use("/camping", centrecamping);
app.use("/randonne", randonne);
app.use("/resevationcentre", reservationcentre);
app.use("/resevationrandonne", reservationrandonne);
app.use("/favorie", favorie);
//app.post('/advencedFiltring',advencedFiltring); //new user



app.listen(PORT, () => {
  console.log("Server started listening on PORT : " + PORT);
});
