import { NavLink } from "react-router-dom";
import "./projects.css";

export function Projects() {
    return (
        <section className="projects">

            <div className="projects-header">
                <h1>Proyectos</h1>
                <p>
                    Algunos de los proyectos en los que he trabajado,
                    enfocados en herramientas y sistemas.
                </p>
            </div>

            <div className="projects-grid">

                <div className="project-card">
                    <h2>Raccoon</h2>

                    <p className="project-description">
                        Cliente REST nativo enfocado en velocidad y simplicidad,
                        construido con React y Tauri.
                    </p>

                    <div className="project-features">
                        <span>⚡ Native HTTP</span>
                        <span>🧠 State management</span>
                        <span>🪶 Lightweight UI</span>
                    </div>

                    <NavLink className="project-link" to={"/raccoon"}>
                        Ver más →
                    </NavLink>
                </div>

                {/* Aquí puedes agregar más proyectos */}

            </div>

        </section>
    )
}