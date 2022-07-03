import { useContext, useState } from 'react'
import { tasksListContext } from '../../App'
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.css'

export default function AddTask() {
    const [task, setTask] = useState('')
    const { tasksList, setTasksList } = useContext(tasksListContext)

    const addTask = event => {
        event.preventDefault()
        let tmpTasksList = structuredClone(tasksList)
        tmpTasksList.push({
            id: uuid(),
            taskName: task,
            date: Date.now(),
            isDone: false
        })
        setTasksList(tmpTasksList)
        localStorage.setItem('tasksList', JSON.stringify(tmpTasksList))
        setTask('')
        event.target.reset()
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