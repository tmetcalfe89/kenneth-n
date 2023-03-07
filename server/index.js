const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

mongoose.connect("mongodb://0.0.0.0:27017");
