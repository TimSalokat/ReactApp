
import { useState } from "react"

const AddTodo = ({ closeForm, onAdd }) => {

    const [label, setLabel] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        const isDone = false
        onAdd({ label, isDone })
        setLabel("")
    }

    return (
        <div className="form-popup" id="myForm">
            <form className="form-container" onSubmit={onSubmit}>
                <h1>New Todo</h1>

                <label><b>Label</b></label>
                <input 
                    type="text" 
                    placeholder="Enter Label" 
                    value={label} 
                    onChange={(e) => setLabel(e.target.value)}
                    required/>

                <button type="submit" className="btn">Create</button>
                <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
            </form>
        </div>
    )
}

export default AddTodo