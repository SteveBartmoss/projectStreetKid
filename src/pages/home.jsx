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
                    <button className="btn-primary">
                        Ver proyectos
                    </button>

                    <button className="btn-secondary">
                        GitHub
                    </button>
                </div>

            </div>

        </section>
    )
}