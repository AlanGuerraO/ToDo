import { TasksList } from "../components/TasksList";
import "./TasksPage.css";

export function TasksPage() {
    return (
        <div className="tasks-page">
            <h2>Mis Tareas</h2>
            <TasksList />
        </div>
    )
};