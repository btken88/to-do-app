import React, { Component } from 'react';
import './App.css';
import ToDoContainer from './components/ToDoContainer'

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.getToDos()
  }

  getToDos = () => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(this.setInitialState)
  }

  setInitialState = (todos) => {
    this.setState({ todos })
  }

  render() {
    return (
      <div className="App">
        <h1>To Do Tracker</h1>
        <ToDoContainer todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
