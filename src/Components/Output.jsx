import React from 'react';
import '../CSS/output.css';

const Output = ({ delTodo, todos }) => {
  return (
    <div className="output-container">
      {todos.map((todo, index) => (
        <div key={index} className='output-value'>
          <h3>Title: {todo.title}</h3>
          <h3>Description: {todo.description}</h3>
          <button className='del-btn' onClick={() => delTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Output;
