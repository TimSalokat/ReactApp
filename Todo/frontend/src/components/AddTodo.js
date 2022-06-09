
import React, { useState } from "react"

const AddTodo = ({ closeForm, onAdd }) => {

    const [label, setLabel] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        const isDone = false
        onAdd({ label, isDone })
        setLabel("")
    }

    return (
        <div className="form_add_todo" id="myForm">
            <form className="form_container" onSubmit={onSubmit}>
                <h1>Add Todo</h1>

                <label><b>Task</b></label>
                <input 
                    type="text" 
                    placeholder="Enter Task" 
                    value={label} 
                    onChange={(e) => setLabel(e.target.value)}
                    required/>
                <div className="form_button_container">
                    <button type="submit" className="btn">Create</button>
                    <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo