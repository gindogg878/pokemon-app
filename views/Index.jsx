const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <h1 style={myStyle}>Pokemon Index Page</h1>
        <ul>
          {pokemon.map((poke, i) => {
            return (
              <li key={i}>
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
