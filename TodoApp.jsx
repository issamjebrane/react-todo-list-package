import React, { Component } from 'react';
import './TodoApp.css'; 

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        todos: [...todos, { text: inputValue, completed: false }],
        inputValue: '',
      });
    }
  };

  toggleTodo = (index) => {
    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };

  render() {
    const { todos, inputValue } = this.state;

    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onClick={() => this.toggleTodo(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
