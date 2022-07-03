import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { tasksListContext } from "../../App"
import style from './style.module.css'

export default function TasksEditor() {
    const { tasksList, setTasksList } = useContext(tasksListContext)

    const deleteTask = id => {
        let tmpTasksList = structuredClone(tasksList).filter(item => item.id != id)
        setTasksList(tmpTasksList)
        localStorage.setItem('tasksList', JSON.stringify(tmpTasksList))
    }

    return (
        <div className={style.tasksEditor}>
            {tasksList.map((item, index) =>
                <div className={style.singleTask} key={item.id}>
                    <button onClick={() => deleteTask(item.id)} className={`${style.deleteBtn} ${tasksList.length == 1 ?
                            style.justOneBtn :
                            index == 0 ?
                                style.lastBtn :
                                index == tasksList.length - 1 ?
                                    style.firstBtn
                                    : ''
                        }`}><FontAwesomeIcon icon={faX} /></button>
                    <input type="checkbox" name="" id="" />
                    {item.taskName}
                </div>
            ).reverse()}
        </div>
    )
}