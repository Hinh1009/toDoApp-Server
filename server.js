const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());

// cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );
  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const db = mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect success to MongoDB");
  })
  .catch((err) => {
    console.error("Connect failed", err);
  });
