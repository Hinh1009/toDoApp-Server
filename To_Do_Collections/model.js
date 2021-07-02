const mongoose = require("mongoose");
const SCHEMA = require("./schema");

const MODEL_NAME = "taskProfiles";
const COLLECTION_NAME = "task-profiles";
const model = mongoose.model(MODEL_NAME, SCHEMA, COLLECTION_NAME);

module.exports = model;
