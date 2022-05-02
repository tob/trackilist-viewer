const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema({
  title: String,
  author: String,
  duration: Number,
  lyrics: String,
  date: String
});

mongoose.model("songs", songSchema);