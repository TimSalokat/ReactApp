import React from 'react'
import Todo from './Todo'

const FinishedTodos = ({ todos, onDelete, checkTodo, uncheckTodo }) => {

  return (
    <div className='todo_container'>
      <h1>Finished Todos</h1>
      { todos.map((todo, index) => (
        <Todo 
            key={index} 
            todo={todo} 
            onDelete={onDelete} 
            index={todo.identifier}
            checkTodo={checkTodo}
            uncheckTodo={uncheckTodo}
        /> 
      ))}
    </div>
  )
}

export default FinishedTodos

