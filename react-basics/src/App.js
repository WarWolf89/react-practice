import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Bitch", age: 29 },
      { name: "Ass", age: 27 }
    ],
    username: "THE NAME"
  };

  switchNameHandler = name => {
    this.setState({
      persons: [
        { name: "SHITFACE", age: 99 },
        { name: name, age: 98 },
        { name: "BOOBOO", age: 97 }
      ]
    });
  };

  usernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  nameChangeHandler = event => {
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
        <button onClick={() => this.switchNameHandler("WHOA")}>
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
          click={this.switchNameHandler.bind(this, "PERFORMANCE")}
          changed={this.nameChangeHandler}
        />
        <UserInput
          usernameChanged={this.usernameHandler}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
