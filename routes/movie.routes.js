const express = require("express");
const router = express.Router();
const {methods} = require("../controllers/movie.controller.js");


// GET API  --find all the existing movies
router.get("/", methods.getMovies);

router.get("/:id", methods.getMovie);
    
//Post API
router.post("/", methods.addMovie);

//PUT API
router.put("/:name", methods.updateMovieByName);
router.put("/id/:id", methods.updateMovieById);
//DELETE API
router.delete("/:id", methods.deleteMovie);

module.exports = router;