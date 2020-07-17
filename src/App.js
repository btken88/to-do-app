import React, { Component } from 'react';
import './App.css';
import ToDoContainer from './components/ToDoContainer'
import ToDoForm from './components/ToDoForm'

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

  addToDo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
    fetch('http://localhost:3000/todos', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    })
  }

  deleteToDo = (idToDelete) => {
    const filteredToDos = this.state.todos.filter(todo => todo.id !== idToDelete)
    this.setState({
      todos: filteredToDos
    })
    fetch(`http://localhost:3000/todos/${idToDelete}`, { method: "DELETE" })
  }

  render() {
    return (
      <div className="App">
        <h1>To Do Tracker</h1>
        <ToDoForm addToDo={this.addToDo} />
        <ToDoContainer deleteToDo={this.deleteToDo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
