import React from 'react'

const ToDoList = ({ addTodo }) => (
  <div>
    <form onSubmit={ e => {
        addTodo(e.target.todoInput.value)
        e.preventDefault()
        e.target.reset()
      } }>
      <input name='todoInput' type='text' />
      <button type='submit'>Add</button>
    </form>
  </div>
)

export default ToDoList
