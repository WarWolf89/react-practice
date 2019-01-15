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
    charComponents: [],
    inputLength: 0,
    showPersons: false
  };

  usernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  textInputPropHandler = (event, charComponents) => {
    const input = event.target.value;
    this.setState({
      inputLength: event.target.value.length
    });
    this.createCharComponents(input);
  };

  createCharComponents = input => {
    const charComponents = (
      <div>
        {[...input].map((c, index) => {
          console.log(index);
          return (
            <CharComponent
              char={c}
              click={() => this.deleteCharHandler(index)}
            />
          );
        })}
      </div>
    );
    this.setState({ charComponents });
  };

  deleteCharHandler = charIndex => {
    const charComponents = { ...this.state.charComponents };
    const newComponents = React.cloneElement(
      charComponents,
      charComponents.props.children.splice(charIndex, 1)
    );
    this.setState({ charComponents: newComponents });
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
        {this.state.charComponents}
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
