import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard"
import './TasksList.css';

export function TasksList() {
    const [ tasks, setTasks ] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTasks()
    }, [])

    return (
        <div className="tasks-list">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}