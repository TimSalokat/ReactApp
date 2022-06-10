import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

const Todo = ({ todo, onDelete, index, checkTodo, uncheckTodo }) => {
  return (
    
    <div className="todo_item">
      <>
        <CheckBox todo={todo} index={index} checkTodo={checkTodo} uncheckTodo={uncheckTodo} />
      </>
      <div>
          <h3 className={`todo ${todo.isDone && 'is_done'}`}>{todo.label}</h3>
          <p>{todo.isDone ? "Task is finished" : "Task is unfinished"}</p>
      </div>
      <>
        <DeleteButton todo={todo} index={index} onDelete={onDelete} />
      </>
    </div>
  )
}

const CheckBox = ({ todo, index, checkTodo, uncheckTodo}) => {
  if(todo.isDone) {
    return <MdCheckBox 
      className="todo_checkbox" 
      id="check_box_checked" 
      style={{display: "block"}} 
      onClick={ () => uncheckTodo(index) } />
  }else {
    return <MdCheckBoxOutlineBlank 
      className="todo_checkbox" 
      onClick={ () => checkTodo(index) }
      style={{ display:"block" }}
      />
  }
}

const DeleteButton = ({ todo, index, onDelete }) => {
  if(todo.isDone) {
    return <div className='todo_del_btn_container'>
          <TiDeleteOutline className="todo_del_btn" onClick={ () => onDelete(index) }/>
      </div>
  }
}

export default Todo