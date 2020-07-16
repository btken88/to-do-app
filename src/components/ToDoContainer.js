import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoContainer({ todos }) {
  const todoList = todos.map(todo => {
    return <ToDoItem {...todo} key={todo.id} />
  })

  return (
    <ul className="todo-list">
      {todoList}
    </ul>
  )
}