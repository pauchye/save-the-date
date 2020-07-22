const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
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
  },
  price: {
    type: Number,
    default: 0
  }
});

module.exports = Event = mongoose.model("event", EventSchema);
