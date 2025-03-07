import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="redes-sociales">
                <a href="https://github.com/AlanGuerraO" target="_blank" rel="noopener noreferrer" aria-label="Github de Alan Guerra">
                    <img src="/github.png" alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/alan-guerra-dwf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Alan Guerra">
                    <img src="/linkedin.png" alt="Linkedin" />
                </a>
            </div>
            <p className="footer-page">© 2025 | To-Do App</p>
            <div className="footer-text">
                <p>
                    Desarrollado por <a href="https://www.linkedin.com/in/alan-guerra-dwf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Alan Guerra">Alan Guerra</a>
                </p>
            </div>
        </footer>
    );
}
