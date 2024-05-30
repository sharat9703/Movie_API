const mongoose = require("mongoose");
const MovieSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the Movie's name"],
  },
  img: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: [true, "Please add a summary for the Movie"],
  },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
