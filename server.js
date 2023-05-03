require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const pokemon = require("./models/pokemon");
const { connect, connection } = require("mongoose");

//Database connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.once("open", () => {
  console.log("connected to mongo");
});

// setting up middleware viewEngine
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);

//this line tells the render method the default file extension to look for
app.set("view engine", "jsx");
//this line sets the render method default location to look for jsx file to render. w/o this line of code we would have to specify the directory everytime
app.set("views", "./views");

//custom middleware//
app.use(express.urlencoded({ extended: false }));

//INDUCES for pokemon

//index route//
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App");
});

app.get("/pokemon", async (req, res) => {
  try {
    const foundPokemon = await pokemon.find({});
    res.render("Index", { pokemon: foundPokemon });
  } catch (err) {
    res.status(400).send(err);
  }
});

//New route
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//create (post) route: recv info from new route and create new pokemon and display with other pokemon on the list//
app.post("/pokemon", async (req, res) => {
  // pokemon.push(req.body);
  try {
    const newPoke = await pokemon.create(req.body);
    res.redirect("/pokemon");
  } catch (err) {
    res.status(400).send(err);
  }
});

//show route
app.get("/pokemon/:id", async (req, res) => {
  try {
    const foundPokemon = await pokemon.findById(req.params.id);
    res.render("Show", { pokemon: foundPokemon });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Listen
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
