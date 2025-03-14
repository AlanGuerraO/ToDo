import { useNavigate } from "react-router-dom";
import './TaskCard.css';

export function TaskCard({ task }) {
    const navigate = useNavigate();

    return (
        <div className="card-container" onClick={() => navigate(`/tasks/${task.id}`)}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <hr />
        </div>
    );
}
