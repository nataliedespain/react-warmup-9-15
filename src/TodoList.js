import React from 'react'

const ToDoList = ({ todos }) => (
  <div>
    <ul>
      { todos.map((todo, i) => <li key={ i }>{ todo }</li>) }
    </ul>
  </div>
)

export default ToDoList
