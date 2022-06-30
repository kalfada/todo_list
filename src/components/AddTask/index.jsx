import style from './style.module.css'

export default function AddTask() {
    return(
        <div className={style.container}>
            <button className={style.addBtn}>+</button>
            <input className={style.taskInput} type="text" name="task" />
        </div>
    )
}