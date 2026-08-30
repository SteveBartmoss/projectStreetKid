import { NavLink } from 'react-router-dom'
import './topbar.css'

export function TopBar() {

    return (

        <header className="navbar">

            <div className="topbar-container">

                <NavLink to="/" className="logo">
                    <span className="logo-mark">
                        ◇
                    </span>

                    <span>
                        Steve<span className="logo-accent">.</span>Bartmoss
                    </span>
                    
                </NavLink>

                <nav className="nav">
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Proyectos
                    </NavLink>

                    <a
                        href="https://github.com/SteveBartmoss"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-button"
                    >
                        GitHub
                    </a>

                    <NavLink
                        to="/steve"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Sobre steve
                    </NavLink>
                </nav>

            </div>

        </header>
    )
}