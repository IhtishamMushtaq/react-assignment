import React from "react";
import "./styles.css";
import Card from "./card";
import styles from "./card.module.css";
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
      return (
        <div className={styles.load}>
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className={styles.top}>Breaking Bad</h1>
          {this.state.values.map((obj) => (
            <Card data={obj} />
          ))}
        </div>
      );
    }
  }
}
export default App;
