import React from 'react'
import Todo from './Todo'

const ActiveTasks = ({ todos, onDelete }) => {
  return (
    <div className='todo_container'>
      <h1>Active Todos</h1>
      {todos.map((todo, index) => (
          <Todo key={index} todo={todo} onDelete={onDelete} index={index}/>
      ))}
    </div>
  )
}

export default ActiveTasks