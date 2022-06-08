import React from 'react'
import Todo from './Todo'

const FinishedTasks = ({ todos, onDelete }) => {
  return (
    <div className='todo_container'>
      <h1>Finished Todos</h1>
      {todos.map((todo, index) => (
          <Todo key={index} todo={todo} onDelete={onDelete} index={index}/>
      ))}
    </div>
  )
}

export default FinishedTasks