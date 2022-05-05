const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema({
  title: String,
  version: String,
  order: Number,
  fontSize: Number,
  lyrics: String,
  date: String
});

mongoose.model("songs", songSchema);