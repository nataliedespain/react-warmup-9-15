import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {

  state = {
    todos: ['take out trash', 'do laundry', 'conquer the world', 'eat cake to celebrate']
  }

  addTodo = (item) => {
    this.setState({
      todos: this.state.todos.concat(item)
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={ this.state.todos } />
        <TodoInput addTodo={ this.addTodo } />
      </div>
    );
  }
}

export default App;
