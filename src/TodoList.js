import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoItems, toggleTodoItem }) => (
  <div>
    {
      todoItems.map(({checked, task, id}) => (
        <TodoItem 
          key={id}
          checked={checked}
          task={task}
          toggle = {() => {toggleTodoItem(id)}} />
      ))
    }
  </div>
);

export default TodoList;
