import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    persons: [
      { id: "GED", name: "Max", age: 28 },
      { id: "DEG", name: "Bitch", age: 29 },
      { id: "ABC", name: "Ass", age: 27 }
    ],
    username: "THE NAME",
    showPersons: false
  };

  usernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    this.setState(state => ({
      showPersons: !state.showPersons
    }));
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>THIS IS A REACT APP</h1>
        <button onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}
        <UserInput
          usernameChanged={this.usernameHandler.bind(this)}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
