import { useContext, useState } from "react"
import { tasksListContext } from "../../App"

export default function TaskList() {
    const { tasksList } = useContext(tasksListContext)

    return (
        <div>
            {tasksList.map(item => {
                <div>{item.taskName}daniel</div>
            })}
        </div>
    )
}