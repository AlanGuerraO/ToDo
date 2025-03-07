import { useNavigate } from "react-router-dom";
import './TaskCard.css'; // Importar los estilos de la card

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
