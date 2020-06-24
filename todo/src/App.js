import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import AddTodo from './AddTodo/AddTodo';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className="App">
        <AddTodo addTodoFn={this.addTodo}></AddTodo>
        <TodoList
          updateTodoFn={this.updateTodo}
          deleteTodoFn={this.deleteTodo}
          todos={this.state.todos}></TodoList>
      </div>
    )
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log('no todos');
    }
  }

  // spread operator returns new array of state.todos and then adds todo
  addTodo = async (todo) => {
    await this.setState({
      todos: [...this.state.todos, {
        text: todo,
        completed: false
      }]
    });
    // wait for setstate to finish then move on
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if (todo === _todo) {
        return {
          text: todo.text,
          completed: !todo.completed
        };
      }
      else {
        return _todo;
      }
    });

    await this.setState({ todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  deleteTodo = async (todo) => {
    const todoIndex = this.state.todos.indexOf(todo);
    // splice RETURNS THE SPLICED OFF ARRAY. must set array first, then call splice.
    const newTodos = [...this.state.todos];
    newTodos.splice(todoIndex, 1);
    await this.setState({ todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
}

export default App;
