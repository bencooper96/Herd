const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: false,
  },
  text: {
    type: String,
    required: false,
    unique: false,
  },
  votes: {
    type: Array,
    default: [],
  },
  comments: {
    type: Array,
    default: [],
  },
  isShown: { type: Boolean },
  rightSliderBound: {
    type: String,
    required: false,
    unique: false,
  },
  leftSliderBound: {
    type: String,
    required: false,
    unique: false,
  },
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
