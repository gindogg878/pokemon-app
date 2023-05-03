const React = require("react");
const Nav = require("../views/components/Nav");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <Nav link="/pokemon/new" text="Create a Pokemon" />
        <h1 style={myStyle}>Pokemon Index Page</h1>
        <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${pokemon._id}`}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
