import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import Validation from "./Validation/Validation";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    persons: [
      { id: "GED", name: "Max", age: 28 },
      { id: "DEG", name: "Bitch", age: 29 },
      { id: "ABC", name: "Ass", age: 27 }
    ],
    username: "THE NAME",
    input: "",
    inputLength: 0,
    showPersons: false
  };

  usernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  textInputPropHandler = event => {
    const input = event.target.value;
    this.setState({
      input,
      inputLength: event.target.value.length
    });
  };

  createCharComponents = () => {
    console.log("CALLED");
    let charComponents = null;
    charComponents = (
      <div>
        {[...this.state.input].map(c => {
          return <CharComponent char={c} />;
        })}
      </div>
    );
    return charComponents;
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
    let charcomponents = this.createCharComponents();

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
        {charcomponents}
        <input onChange={this.textInputPropHandler} />
        <p>input length: {this.state.inputLength}</p>
        <UserInput
          usernameChanged={this.usernameHandler.bind(this)}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <Validation inputLength={this.state.inputLength} />
      </div>
    );
  }
}

export default App;
