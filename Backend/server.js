const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send(`API is running on PORT ${PORT}`);
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id",
  (req, res) => {
    //const note = notes.find(note => note._id === req.params._id);
    res.json(notes.find(note => note._id === req.params.id));
  });

  const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
