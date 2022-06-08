import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const Todo = ({ todo, onDelete, index }) => {
  return (
    
    <div className="todo_item">
        <div>
            <h3>
                {todo.label}
            </h3>
            <p>{todo.isDone ? "Task is finished" : "Task is unfinished"}</p>
        </div>
        <div className='todo_del_btn_container'>
            <TiDeleteOutline className="todo_del_btn" onClick={ () => onDelete(index) }/>
        </div>
    </div>
  )
}

export default Todo