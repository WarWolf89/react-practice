import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Bitch", age: 29 },
      { name: "Ass", age: 27 }
    ]
  };

  swithNameHandler = name => {
    this.setState({
      persons: [
        { name: "SHITFACE", age: 99 },
        { name: name, age: 98 },
        { name: "BOOBOO", age: 97 }
      ]
    });
  };

  nameChangeHandeler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Bitch", age: 29 },
        { name: event.target.value, age: 97 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>THIS IS A REACT APP</h1>
        <button onClick={() => this.swithNameHandler("WHOA")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.swithNameHandler.bind(this, "PERFORMANCE")}
          changed={this.nameChangeHandeler}
        />
      </div>
    );
  }
}

export default App;
