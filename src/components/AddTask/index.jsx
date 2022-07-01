import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.css'

export default function AddTask() {
    const [task, setTask] = useState('')

    const addTask = event => {
        event.preventDefault()
        console.log(task);
    }

    return (
        <form className={style.container} onSubmit={addTask}>

            <button type='submit' className={style.addBtn}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <input className={style.taskInput} type="text" name="task" onChange={e => setTask(e.target.value)} />
        </form>
    )
}