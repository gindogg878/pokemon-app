const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require("./models/pokemon");

// setting up middleware viewEngine
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);

//this line tells the render method the default file extension to look for
app.set("view engine", "jsx");
//this line sets the render method default location to look for jsx file to render. w/o this line of code we would have to specify the directory everytime
app.set("views", "./views");

//INDUCES for pokemon

//index route//
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon });
});

//show route
app.get("/pokemon/:id", (req, res) => {
  res.render("Show", { pokemon: pokemon[req.params.id] });
});
//Listen
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
