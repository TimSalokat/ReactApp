
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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


todos = [
    {
        "id": "1",
        "item": "Read a book"
    },
    {
        "id": "2",
        "item": "Cycle around town"
    }
]


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"Message": "Welcome to your todo list"}


@app.get("/todo", tags=["todos"])
async def get_todos() -> dict:
    return  { "data": todos }


@app.post("/todo", tags=["todos"])
async def add_todo(todo: dict) -> dict:
    todos.append(todo)
    return {
        "data": { "Todo added" }
    }