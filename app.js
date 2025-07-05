const express = require("express");

const app = express();

app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json({
    message: "JNote is created",
    notes: notes,
  });
});
app.get("/notes", (req, res) => {
  res.json(notes);
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: "notes is deleted",
  });
});




app.patch("/notes/:index", (req, res) => {
  const index = req.params.index ; // convert string to number
  const { title } = req.body;
  notes[index].title = title; // this assumes the index is valid
  res.json({
    message: "notes update successfully",
  });
});

app.listen(3000, () => {
  console.log("Sever is running on port number 3000");
});
