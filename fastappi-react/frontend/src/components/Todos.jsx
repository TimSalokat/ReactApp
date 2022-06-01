
import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";


const TodosContext = React.createContext({
  todos: [], fetchTodos: () => {}
})


export default function Todos() {
  const [todos, setTodos] = useState([])
  const fetchTodos = async () => {
    const response = await fetch("http://127.0.0.1:8000/todo", {mode: "cors"})
    const todos = await response.json()
    setTodos(todos.data)
  }
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <TodosContext.Provider value={{todos, fetchTodos}}>
        <AddTodo />
        <Stack spacing={3}>
            {todos.map((todo) => (
            <b>{todo.item}</b>
            ))}
        </Stack>
    </TodosContext.Provider>
  )
}


function AddTodo() {
    const [item, setItem] = React.useState("")
    const {todos, fetchTodos} = React.useContext(TodosContext)


    const handleInput = event => {
        setItem(event.target.value)
    }


    const handleSubmit = (event) => {
        const newTodo = {
            "id": todos.length + 1,
            "item": item
        }

        fetch("http://localhost:8000/todo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo)
        }).then(fetchTodos)
    }


    return (
        <form onSubmit={handleSubmit}>
            <InputGroup size="md">
                <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Add a todo"
                    aria-label="Add a todo"
                    onChange={handleInput}
                />
            </InputGroup>
        </form>
    )
}