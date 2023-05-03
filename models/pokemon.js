//destructuring the schema and model
const { Schema, model } = require("mongoose");

//creating a new schema, same thing as mongoose.schema
const pokeSchema = new Schema({
  name: { type: String, required: true },
  img: String,
});
const pokemon = model("pokemon", pokeSchema);
module.exports = pokemon;
