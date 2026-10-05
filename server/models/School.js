const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  board: {
    type: String,
    required: true,
  },

  fees: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  facilities: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("School", schoolSchema);