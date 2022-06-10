
from __future__ import annotations
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import logging
import json
import datetime

def log(text):
    with open("api/testinglog.txt", "a") as file:
        text = f"{datetime.datetime.now()} || {text}"
        file.write(text)       
        file.write("\n\n")
        file.close()

def update_todos_file(todos):
    with open("api/todos.txt", "w") as file:
        file.write(str(todos))
        file.close()

def get_todos_from_file():
    with open("api/todos.txt", "r") as file:
        todosNew = file.read()
        return todosNew

def update_all_identifier():
    for i in range(len(todos)):
        todos[i]["identifier"] = i


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000",
    "http://127.0.0.1:3000",
    "127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]    
)

todos= []

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"Message": "Welcome to your todo list"}

@app.get("/todos", tags=["todos"])
async def get_todos() -> dict:
    return  { "data": todos }

@app.post("/add-todo")
async def add_todo(new_todo: str = Body(...)):
    new_todo_dict = json.loads(new_todo)
    log(f"Added <{new_todo_dict['label']}>")
    new_todo_dict["identifier"] = len(todos)
    todos.append(new_todo_dict)   
    update_todos_file(todos)               
    return new_todo_dict

@app.delete("/del-todo")
async def del_todo(index: int): 
    log(f"Deleted <{todos[index]['label']}>")
    del todos[index]
    update_all_identifier()
    update_todos_file(todos)
    return todos

@app.put("/mark-as-done")
async def mark_as_done(index: int):
    log(f"Marked <{todos[index]['label']}> as done")
    todos[index]["isDone"] = True
    update_todos_file(todos)
    return todos

@app.put("/mark-as-undone")
async def mark_as_undone(index: int):
    log(f"Marked <{todos[index]['label']}> as undone")
    todos[index]["isDone"] = False
    update_todos_file(todos)
    return todos

todos = eval(get_todos_from_file())