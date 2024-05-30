const express = require("express");
const router = express.Router();
const {getMovies,getMovie,addMovie, deleteMovie, updateMovieById, updateMovieByName} = require("../controllers/movie.controller.js");


// GET API  --find all the existing movies
router.get("/", getMovies);

router.get("/:id", getMovie);

//Post API
router.post("/", addMovie);

//PUT API
router.put("/:name", updateMovieByName);
router.put("/id/:id", updateMovieById)
//DELETE API
router.delete("/:id", deleteMovie);

module.exports = router;