import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h1>Tasks App</h1>
                </Link>
                <ul>
                    <li>
                        <Link to='/tasks'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/tasks-create'>Create Task</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}