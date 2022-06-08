
import { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"

import SideBar from "./components/SideBar";
import NavBar  from "./components/NavBar";
import ActiveTasks from "./components/ActiveTodos";
import FinishedTasks from "./components/FinishedTasks";
import AddTodo from "./components/AddTodo";

const App = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getTodos = async () => {
            const todosFromServer = await fetchTodos()
            setTodos(todosFromServer.data)
        }
        getTodos();
    }, [])

    //Get todos from database
    const fetchTodos = async () => {
        const res = await fetch("http://localhost:8000/todos");
        const data = await res.json();

        return data
    }

    //Add a todo
    const addTodo = async (new_todo) => {
        console.log("Sending request to add item")
        const res = await fetch("http://localhost:8000/add-todo", {
            method: "POST",
            mode: "cors",
            header: {"Content-type": "application/json"},
            body: JSON.stringify(new_todo),
        })

        const data = await res.json()
        setTodos([...todos, data])
    }

    //Delete a Todo
    const delTodo = async (id) => {
        console.log("Sending request to delete item with index " + id)
        const res = await fetch(`http://localhost:8000/del-todo?index=${id}`, {
            method: "DELETE",
            mode: "cors",
        })

        res.status === 200
            ? setTodos(await res.json())
            : alert("Error")
    }

    return (
        <>
            <SideBar closeNav={closeNav}/>
            <NavBar openNav={openNav}/>

            <div id="main">
                <div className="all_todos_container">
                    <ActiveTasks todos={todos.filter((todo) => todo.isDone === false)} onDelete={delTodo}/>
                    <FinishedTasks todos={todos.filter((todo) => todo.isDone === true)} onDelete={delTodo} />
                </div>
            </div>


            <AddTodo closeForm={closeForm} onAdd={addTodo} />
            <AiOutlinePlusCircle 
                id="open_form_btn" 
                className="form_add_todo_btn" 
                onClick={openForm}
            />
        </>
    )
}

//Navigation Bar at the Site
const openNav = () => {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
const closeNav = () => {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//Form field for a new Todo | open and close
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("open_form_btn").style.display = "none";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("open_form_btn").style.display = "block";
}

export default App