const express = require("express");
const mongoose = require("mongoose");

const movieRoute = require("./routes/movie.routes.js");
const bodyParser = require("body-parser");
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api/movies", movieRoute);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

mongoose
  .connect(
    "mongodb+srv://Sharat:sharatspass@sandbox1.ggiggrb.mongodb.net/Movies_API?retryWrites=true&w=majority&appName=Sandbox1"
  )
  .then(() => {
    console.log("database is connected!");
    app.get("/", (req, res) => {
      res.send("hello from nodeAPI server");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
