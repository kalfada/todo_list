import { useState } from 'react'
import style from './style.module.css'

export default function AddTask() {
    const [task, setTask] = useState('')

    const addTask = event => {
        event.preventDefault()
        console.log(task);
    }

    return (
        <form className={style.container} onSubmit={addTask}>
            <input type="submit" value="+" className={style.addBtn} />
            <input className={style.taskInput} type="text" name="task" onChange={e => setTask(e.target.value)} />
        </form>
    )
}