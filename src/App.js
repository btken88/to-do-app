import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  render() {
    return (
      <div className="App">
        <h1>To Do Tracker</h1>
      </div>
    );
  }
}

export default App;
