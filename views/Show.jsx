const React = require("react");

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    let newName = pokemon.img;

    return (
      <div>
        <h1>'Gotta Catch 'Em All'</h1>
        <h2>{pokemon.name}</h2>
        <img src={(newName += ".jpg")} alt={pokemon.name} /> <br />
        <br />
        <a href="/">Home page</a>
      </div>
    );
  }
}

module.exports = Show;
