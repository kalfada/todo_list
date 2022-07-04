import { useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { tasksListContext } from "../../App"
import Confetti from 'react-confetti'
import style from './style.module.css'

export default function TasksEditor() {
    const [numberOfPieces, setNumberOfPieces] = useState(0)
    const [windowSize] = useState(getWindowSize());
    const { tasksList, setTasksList } = useContext(tasksListContext)

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const deleteTask = id => {
        let tmpTasksList = structuredClone(tasksList).filter(item => item.id !== id)
        setTasksList(tmpTasksList)
        localStorage.setItem('tasksList', JSON.stringify(tmpTasksList))
    }

    const markAsDone = index => {
        let tmpTasksList = structuredClone(tasksList)
        tmpTasksList[index].isDone = !tmpTasksList[index].isDone
        setTasksList(tmpTasksList)
        localStorage.setItem('tasksList', JSON.stringify(tmpTasksList))
        console.log(windowSize);
        if (tmpTasksList[index].isDone) {
            setNumberOfPieces(200)
            setTimeout(() => setNumberOfPieces(0), 2000)
        }
    }

    return (
        <div>
            <Confetti
            width={windowSize.innerWidth}
            height={windowSize.innerHeight}
                numberOfPieces={numberOfPieces}
                className={style.confetti} />
            <div className={style.tasksEditor}>
                {tasksList.map((item, index) =>
                    <div className={style.singleTask} key={item.id}>
                        <button onClick={() => deleteTask(item.id)} className={`${style.deleteBtn}
                    ${tasksList.length === 1 ?
                                style.justOneBtn :
                                index === 0 ?
                                    style.lastBtn :
                                    index === tasksList.length - 1 ?
                                        style.firstBtn
                                        : ''
                            }`}><FontAwesomeIcon icon={faX} /></button>
                        <input type="checkbox" checked={item.isDone} onClick={() => markAsDone(index)} />
                        <div className={`${item.isDone ? style.done : ''}`}>{item.taskName}</div>
                    </div>
                ).reverse()}
            </div>
        </div>
    )
}