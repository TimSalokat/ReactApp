
import React, { useState, useEffect } from "react";

import SideBar from "./components/SideBar";
import NavBar  from "./components/NavBar";
import ActiveTasks from "./components/ActiveTodos";
import FinishedTodos from "./components/FinishedTodos";
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
        closeForm();
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
    const deleteTodo = async (id) => {
        console.log("Sending request to delete item with index " + id)
        const res = await fetch(`http://localhost:8000/del-todo?index=${id}`, {
            method: "DELETE",
            mode: "cors",
        })

        res.status === 200
            ? setTodos(await res.json())
            : alert("Error")
    }


    const checkTodo = async (id) => {
        const res = await fetch(`http://localhost:8000/mark-as-done?index=${id}`, {
            method: "PUT",
            mode: "cors",
        })
        res.status === 200
            ? setTodos(await res.json())
            : alert("Error")
    }
    const uncheckTodo = async (id) => {
        const res = await fetch(`http://localhost:8000/mark-as-undone?index=${id}`, {
            method: "PUT",
            mode: "cors",
        })
        res.status === 200
            ? setTodos(await res.json())
            : alert("Error")
    }

    return (
        <>
            <SideBar style={{width:"0px"}}/>

            <div id="main">
                
                <NavBar openNav={openNav}/>
                <div className="all_todos_container">
                    <ActiveTasks 
                        todos={todos.filter((todo) => todo.isDone === false)} 
                        onDelete={deleteTodo}
                        checkTodo={checkTodo}
                        uncheckTodo={uncheckTodo}
                        openForm={openForm}
                    />
                    <FinishedTodos 
                        todos={todos.filter((todo) => todo.isDone === true)}
                        onDelete={deleteTodo} 
                        checkTodo={checkTodo}
                        uncheckTodo={uncheckTodo}
                    />
                </div>
            </div>

            <AddTodo closeForm={closeForm} onAdd={addTodo} />
        </>
    )
}

//Navigation Bar at the Site
const openNav = () => {
    const side_bar = document.getElementById("Sidebar")
    if (side_bar.style.width === "250px"){
        side_bar.style.width = "0px"
        document.getElementById("main").style.marginLeft = "0px";
    } else {
        side_bar.style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
}

//Form field for a new Todo | open and close
function openForm() {
    document.getElementById("todo_form_overlay").style.display = "block";
    document.getElementById("todo_form").style.display = "block";
}
function closeForm() {
    document.getElementById("todo_form_overlay").style.display = "none";
    document.getElementById("todo_form").style.display = "none";
}

export default App