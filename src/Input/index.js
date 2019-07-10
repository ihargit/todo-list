import React, { useState } from 'react';
import Input from './Input';

const InputContainer = ({ addTodoItem }) => {
  const [text, setText] = useState('');

  const addTodoItemHandler = () => {
    addTodoItem(text);
  };

  const handlerChange = (e) => {
    setText(e.target.value);
  }

  return (
    <Input 
      value = { text }
      handlerChange = {handlerChange}
      addTodoItem = { addTodoItemHandler }
    />
  )
}

export default InputContainer;