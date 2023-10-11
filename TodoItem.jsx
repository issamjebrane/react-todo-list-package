import React from 'react';

const TodoItem = ({ todo, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={todo.completed ? 'completed' : ''}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
