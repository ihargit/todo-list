import React from 'react';

const TodoItem = ({checked = false, task = 'Finish RS course', toggle}) => (
  <div>
    <input type='checkbox' checked={checked} onChange = { toggle }/>
    {task}
  </div>
);

export default TodoItem;