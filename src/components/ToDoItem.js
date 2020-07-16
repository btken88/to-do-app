import React from 'react'

export default function ToDoContainer({ title, content }) {
  return (
    <li className="todo-item">
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  )
}