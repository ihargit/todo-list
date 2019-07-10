import React, { Component } from 'react';
import TodoIList from './TodoList';
import Input from './Input';

class App extends Component {
  state = {
    todoItems: [
      {id: 1},
      {id: 2, checked: true, task: 'Watch react lection #2'},
      {id: 3, task: 'Buy milk'}
    ]
  }

  toggleTodoItem = (index) => {
    const { todoItems } = this.state;
    const todoItem = todoItems[index - 1];
    todoItem.checked = !todoItem.checked;
    this.setState({todoItems});
  };

  addTodoItem = (text) => {
    const { todoItems } = this.state;
    this.setState( {todoItems: [...todoItems, {id: todoItems.length, checked: false, task: text}]})
  }

  render() {
    const { todoItems } = this.state;

    return (
      <>
        <Input addTodoItem = { this.addTodoItem }/>
        <TodoIList todoItems={todoItems} toggleTodoItem = { this.toggleTodoItem }/>
      </>
    )}
}

export default App;
