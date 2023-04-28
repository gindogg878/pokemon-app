const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//INDUCES for pokemon

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App");
});

//Listen
app.listen(PORT, () => {
  console.log("listening on port: ${PORT}");
});
