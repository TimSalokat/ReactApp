import React from 'react'

const ActiveTasks = ({ todos }) => {
  return (
    <div>

        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo.label}</li>
            ))}
        </ul>

    </div>
  )
}

export default ActiveTasks