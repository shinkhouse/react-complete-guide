import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Samuel',
        age: 25
      },
      {
        name: 'Morgan',
        age: 25.5
      }
    ]
  }

  switchNameHandler = () => {
    console.log('wss clicked');
    // avoid
    // this.state.persons[0].name = 'Gypsy';
    //instead
    this.setState({persons: [
      {
        name: 'Samuel H.',
        age: 27
      },
      {
        name: 'Morgan S.',
        age: 27.5
      },
      {
        name: 'Gypsy H.',
        age: 11
      }
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {
        name: 'Samuel H.',
        age: 27
      },
      {
        name: event.target.value,
        age: 27.5
      },
      {
        name: 'Gypsy H.',
        age: 11
      }
    ]})
  }

  render() {
    const style = {
      backgroundColor: '#009688',
      font: 'inherit',
      border: 'none',
      padding: '8px',
      color: 'white',
      borderRadius: '4px',
      cursor: 'pointer',
      outline: 'none'
    }
    return (
      <div className="App">
        <h1>Hello, I'm a react app.</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler}>Button Name</button>
        <Person
          name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler} changed={this.nameChangedHandler}>I am a software engineer.</Person>
        <Person
          name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler} changed={this.nameChangedHandler}>I am a therapist.</Person>  
      </div>
      // React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React app!!!'))
    );
  }
}

export default App;
