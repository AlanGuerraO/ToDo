import { useNavigate } from "react-router-dom";

export function TaskCard({task}) {
    const navigate = useNavigate();

    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: '#181818', cursor: 'pointer', color: 'white'}}
        onClick={() => navigate(`/tasks/${task.id}`)}
        >
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <hr />
        </div>
    );
}
