import { useState } from "react"

export default function TaskList() {
    const [tasks, setTasks] = useState([{name: 'go to'}])

    return(
        <div>
            {tasks.map(item=>{
                <div>{item.name}</div>
            })}
        </div>
    )
}