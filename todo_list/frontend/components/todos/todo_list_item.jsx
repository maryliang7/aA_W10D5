import React from 'react';

const ToDoListItem = ({ todo }) => {
  return (
    <div>
      <span>No. {todo.id}</span>
      <div>Task: {todo.title}</div>
      <div>Description: {todo.body}</div>
      <br/>
    </div>
  )
};

export default ToDoListItem;