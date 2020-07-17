import React from 'react'

export default function ToDoContainer({ title, content, id, deleteToDo }) {
  const handleClick = (event) => deleteToDo(id)

  return (
    <li className="todo-item">
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="delete-button" onClick={handleClick}>DELETE</button>
    </li>
  )
}