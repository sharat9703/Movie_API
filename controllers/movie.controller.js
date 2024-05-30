const Movie = require("../models/movie.model.js");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateMovie = async (req, res) => {
  try {
    const {name} = req.params;
    const mov = await Movie.findOne({name:name});
    const movie = await Movie.updateOne({name : name}, 
        {
            $set:{
                "name" : req.body.name,
                "img": req.body.img,
                "summary" : req.body.summary
            }
        });
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    const id = mov._id;
    // console.log(id);
    const updatedMovie = await Movie.findById(id);
    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) res.status(404).json({ message: "Movie Not Found" });
    res.status(200).json({ message: "movie deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getMovies, getMovie, addMovie, updateMovie, deleteMovie };
