import { NavLink } from 'react-router-dom'
import './topbar.css'

export function TopBar() {

    return (
        <header className="topbar">

            <div className="topbar-container">

                <NavLink to="/" className="logo">
                    Steve Bartmoss
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
                </nav>

            </div>

        </header>
    )
}