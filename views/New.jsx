const React = require("react");
const Nav = require("../views/components/Nav");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create New Pokemon</h1>
        <form action="/pokemon" method="POST">
          Name:
          <input type="text" name="name" /> <br />
          <br />
          Note- make sure image is a jpg file, and add url w/o jpg extension.
          <br />
          Add image URL: <input type="text" name="img" /> <br />
          <input type="submit" value="Create Pokemon" />
        </form>
        <br />
        <Nav link="/pokemon/" text="Pokemon Index Page" />
      </div>
    );
  }
}

module.exports = New;
