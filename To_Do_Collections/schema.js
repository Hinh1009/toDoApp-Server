const mongoose = require("mongoose");

const SCHEMA = new mongoose.Schema({
  taskName: [
    {
      type: String,
      required: [true, "Yeu cau nhap task name"],
    },
  ],
  taskDescription: [
    {
      type: String,
      required: [true, "Yeu cau nhap task des"],
    },
  ],
  taskStatus: [
    {
      type: Boolean,
      required: [true],
      default: false,
    },
  ],
});

module.exports = SCHEMA;
