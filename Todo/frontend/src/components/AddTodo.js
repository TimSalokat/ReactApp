
import React, { useState } from "react"

const AddTodo = ({ closeForm, onAdd }) => {

    const [label, setLabel] = useState("")
    const [description, setDescription] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        const isDone = false
        onAdd({ label, description, isDone })
        setLabel("")
        setDescription("")
    }

    return (
        <>
        <div className="overlay" id="todo_form_overlay" onClick={closeForm}/>
        <div className="add_todo_form_container" id="todo_form">
            <h2> Add Todo </h2>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(d) => setDescription(d.target.value)}
                />
                <div className="add_todo_button_container">
                    <button type="button" className="add_todo_button cancel" onClick={closeForm}> Cancel </button>
                    <button type="submit" className="add_todo_button confirm"> Add </button>
                </div>
            </form>
        </div>
    </>
    )
}

export default AddTodo