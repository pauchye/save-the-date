const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiningSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  range: {
    type: Array,
    required: true,
    default: [0, 24],
  },
});

module.exports = Dining = mongoose.model("dining", DiningSchema);
