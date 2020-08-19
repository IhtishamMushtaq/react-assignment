import React from "react";
import "./styles.css";
import Card from "./card";

class App extends React.Component {
  state = {
    values: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          values: json,
          isLoaded: true
        });
      });
  }
  render() {
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          {this.state.values.map((obj) => (
            <Card data={obj} />
          ))}
        </div>
      );
    }
  }
}
export default App;
