const express = require("express");

const app = express();

app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json({
    message: "Notes add successfully",
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
    message: "notes deleted",
  });
});

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const { title } = req.body;

  notes[index].title = title;
  res.json({
    message: "notes update successfully",
  });
});

app.listen(3000, () => {
  console.log("Port is running on ");
});
