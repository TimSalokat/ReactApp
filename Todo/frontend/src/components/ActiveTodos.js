import React from 'react'
import Todo from './Todo'
import { AiOutlinePlus } from 'react-icons/ai'

const ActiveTasks = ({ todos, onDelete, checkTodo, uncheckTodo, openForm }) => {
  return (
    <div className='todo_container'>
      <h1>Active Todos</h1>
      {todos.map((todo, index) => (
          <Todo 
            key={index} 
            todo={todo} 
            onDelete={onDelete} 
            index={todo.identifier}
            checkTodo={checkTodo}
            uncheckTodo={uncheckTodo}
          />
      ))}
      <button className="button_add_todo" onClick={openForm}>
        <AiOutlinePlus className="icon_add_todo"/>
        Add Todo
      </button>
    </div>
  )
}

export default ActiveTasks