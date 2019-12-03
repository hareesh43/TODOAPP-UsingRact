import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';




class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'buy milk' },
      { id: 2, content: 'order shoe' },

    ]
  }

  deleteTodos = (id) => {


    let newtodos = this.state.todos.filter(todo => {
      return todo.id !== id;

    })
    this.setState({
      todos: newtodos
    })


  }

  addTodos = (todo) => {
    todo.id = Math.random();

    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })


  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>

        <Todos todos={this.state.todos} deleteTodos={this.deleteTodos} />
        <AddTodos addTodos={this.addTodos} />


      </div>
    );
  }
}

export default App;
