import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoContainer({ todos, deleteToDo }) {
  const todoList = todos.map(todo => {
    return <ToDoItem {...todo} deleteToDo={deleteToDo} key={todo.id} />
  })

  return (
    <ul className="todo-list">
      {todoList}
    </ul>
  )
}