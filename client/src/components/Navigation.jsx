import { Link } from "react-router-dom";
import './Navigation.css';

export function Navigation() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h1 className="container_logo">
                        <img src="/logo.png" alt="Logo de la apliacion" className="logo"/>
                        To-Do App
                    </h1>
                </Link>
                <ul>
                    <li>
                        <Link to='/tasks'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/tasks-create' className="crear">Create Task</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}