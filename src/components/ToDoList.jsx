import { useState } from "react";


const ToDoList = () => {
    const [value, setValue] = useState("")
    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: "Estudar Daw"
        },
        {
            id: 2,
            description: "Jogar Futebol"
        },
        {
            id: 3,
            description: "Ir ao Ginasio"
        }
    ])



    const handleForm = (e) => {

        e.preventDefault();

        if (!value) return

        const newTasks = [...tasks, {
            id: Math.floor(Math.random() * 10000),
            description: value
        }]

        setTasks(newTasks);
        setValue('')
    }


    const removeTask = (id) => {

        const newTasks = [...tasks];
        const filterdTasks = newTasks.filter((task) => {

            return task.id !== id ? task : null;
        });

        setTasks(filterdTasks)
        console.log(filterdTasks)
    }

    return (
        <div className="container">
            <h1>To Do List</h1>
            <form onSubmit={handleForm}>
                <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="Digite a tarefa" />
                <button>Add</button>

            </form>

            <ul>
                {tasks.length > 0 && tasks.map((task) => (
                    <li className="task" key={task.id}><p>{task.description}</p>
                        <button onClick={() => { removeTask(task.id) }}>X</button></li>
                ))}

            </ul>

        </div>
    )

}

export default ToDoList;