import { NavLink } from 'react-router-dom'
import './home.css'

export function Home() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="badge">🚀 Open Source & Tools</span>

                <h1>
                    Hola, soy <span className="highlight">Steve</span> 👋
                </h1>

                <h2 className="subtitle">
                    Construyo herramientas como <span>clientes REST</span>, editores
                    y librerías desde cero.
                </h2>

                <p className="description">
                    Me enfoco en entender cómo funcionan las cosas internamente
                    y desarrollar soluciones eficientes, ligeras y bien diseñadas.
                </p>

                <div className="actions">
                    <NavLink to="/projects" className="btn-secondary">
                        Ver proyectos
                    </NavLink>

                    <a 
                        href="https://github.com/SteveBartmoss" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-secondary"
                    >
                        GitHub
                    </a>
                </div>

            </div>

        </section>
    )
}