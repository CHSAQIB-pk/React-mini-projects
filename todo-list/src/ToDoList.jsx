import React, { useState } from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState([])
    const [newTask, setnewTask] = useState()


    function handleInputChange(e) {
        setnewTask(e.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {

            setTasks(t => [...t, newTask])
            setnewTask("")
        }
    }
    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    return (

        <div className='to-do-list'>
            <h1>To-DO-List</h1>

            <div className='input-section'>
                <input
                    type="text"
                    placeholder='Enter A Task ...'
                    autoFocus
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className='add-button' onClick={addTask}>add</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>

    )
}

export default ToDoList
