import React from 'react';

const Input = ({ value, addTodoItem, handlerChange }) => (
  <>
    <input
      type = 'text'
      value = { value }
      onChange = { handlerChange }
    />
    <button
      onClick = { addTodoItem }
    >Add</button>
  </>
);

export default Input;