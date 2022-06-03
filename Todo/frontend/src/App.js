
import { useState, useEffect } from "react";

import SideBar from "./components/SideBar";
import NavBar  from "./components/NavBar";
import ActiveTasks from "./components/ActiveTodos";
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
        console.log(new_todo)
        console.log(JSON.stringify(new_todo))
        console.log(typeof(new_todo))
        console.log(typeof(JSON.stringify(new_todo)))
        const res = await fetch("http://localhost:8000/add-todo", {
            method: "POST",
            mode: "cors",
            header: {"Content-type": "application/json"},
            body: JSON.stringify(new_todo),
        })

        const data = await res.json()
        setTodos([...todos, data])
    }

    return (
        <>
            <SideBar closeNav={closeNav}/>
            <NavBar openNav={openNav}/>
            <div id="main">
                <ActiveTasks todos={todos}/>
            </div>
            <AddTodo closeForm={closeForm} onAdd={addTodo} />
            <button onClick={openForm}>TempFormButton</button>
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
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

export default App