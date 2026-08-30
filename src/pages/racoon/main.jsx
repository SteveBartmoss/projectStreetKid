import { ParticlesSnakeRacional } from '../../components/particles/particlesSnakeRacional'
import './css/main.css'
import raccoonImg from '../../assets/raccoon.png'
import reactImg from '../../assets/react.svg'
import rustImg from '../../assets/rust-logo.svg'
import tauriImg from '../../assets/tauri.png'
import { NavLink } from 'react-router-dom'

function Feature({
  icon,
  title,
  description
}) {
  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <div className="feature-arrow">
        →
      </div>

    </div>
  );
}


export function MainRacoon() {

    return (
        <>
            <div className="app">

                {/* Background effects */}
                <div className="background-grid" />
                <div className="glow glow-purple" />
                <div className="glow glow-blue" />

                <main>

                    <section className="hero">

                        <div className="hero-content">

                            <div className="badge">
                                <span className="status-dot" />
                                Creado por desarrolladores
                            </div>

                            <h1>
                                Racoon
                                <br />
                                <span>v1.23.15 latest.</span>
                            </h1>

                            <p className="hero-description">
                                Una alternativa GNU simple para probar APIs REST.
                                Rápido, ligero y enfocado en lo esencial.
                            </p>

                            <div className="hero-actions">

                                <a
                                    href='https://github.com/SteveBartmoss/projectRacoon/releases/tag/v1.0.0'
                                    target="_blank"
                                    rel="noreferrer"
                                    className="download-racoon"
                                >
                                    Descargar
                                </a>

                                <a
                                    href='https://github.com/SteveBartmoss/projectRacoon'
                                    target="_blank"
                                    rel="noreferrer"
                                    className="secondary-button"
                                >
                                    View on GitHub
                                </a>

                            </div>

                            <div className="hero-meta">
                                <span>Open source</span>
                                <span>•</span>
                                <span>Cross-platform</span>
                                <span>•</span>
                                <span>Developer first</span>
                            </div>

                        </div>


                        {/* Hero preview */}
                        <div className="hero-preview">
                            <div className="div-img-raccoon">
                                <img className="img-raccoon" src={raccoonImg} alt="Raccoon App" />
                            </div>
                        </div>

                    </section>

                    <section className="trusted">

                        <p>
                            PARA DESARROLLADORES DE UN DESARROLLADOR
                        </p>

                        <div className="trusted-items">
                            <span>REST APIs</span>
                            <span>GraphQL</span>
                            <span>WebSockets</span>
                            <span>HTTP</span>
                            <span>JSON</span>
                        </div>

                    </section>

                    {/* Features */}
                    <section
                        id="features"
                        className="features"
                    >

                        <div className="section-heading">

                            <div className="small-label">
                                SIMPLE PERO POTENTE
                            </div>

                            <h2>
                                Todo lo que necestias.
                                <br />
                                Nada que no quieres.
                            </h2>

                            <p>
                                Raccoon ofrece lo necesario para trabajar con APIs sin vender tu informacion.
                            </p>

                        </div>


                        <div className="feature-grid">

                            <Feature
                                icon="↗"
                                title="Fast native HTTP client"
                                description="Send requests, inspect responses and debug your APIs with a clean and intuitive interface."
                            />

                            <Feature
                                icon="▱"
                                title="Status, response time and size"
                                description="Organize your endpoints into collections and keep your projects structured."
                            />

                            <Feature
                                icon="⌘"
                                title="JSON viewer"
                                description="Switch between development, staging and production with ease."
                            />

                            <Feature
                                icon="◷"
                                title="Minimal UI"
                                description="Quickly find and replay requests you've already made."
                            />

                            <Feature
                                icon="{}"
                                title="Sistema de ventanas"
                                description="Edit and inspect JSON payloads with syntax highlighting."
                            />

                            <Feature
                                icon="⚡"
                                title="Fast"
                                description="Designed to stay responsive even when you're working with large APIs."
                            />

                            <Feature
                                icon="▱"
                                title="Auth"
                                description="Organize your endpoints into collections and keep your projects structured."
                            />

                            <Feature
                                icon="▱"
                                title="Parámetros dinámicos"
                                description="Organize your endpoints into collections and keep your projects structured."
                            />

                        </div>

                    </section>

                </main>

            </div>

            <div className="racoon-container">

                <section className="hero">
                    <div className="hero-image-skills">
                        <img src={raccoonImg} alt="Raccoon App" />
                    </div>

                    <div className="hero-text">

                        <h1>Private by Design</h1>

                        <h2>Un cliente REST que respeta tu privacidad</h2>

                        <p className="description">
                            Raccoon funciona completamente de forma local.
                            No requiere cuentas, servicios en la nube ni conexiones externas.
                            Todas las peticiones, configuraciones y datos permanecen en tu máquina.

                            Sin telemetría. Sin tracking. Sin dependencias innecesarias.
                            Tú mantienes el control total de tu información.
                        </p>

                    </div>

                </section>

                <section className="hero hero-reverse">

                    <div className="hero-text">

                        <h1>De desarrollador</h1>

                        <h2>Para desarrolladores</h2>

                        <p className="description">
                            Raccoon nace desde la experiencia real de desarrollo.
                            No busca crear un ecosistema cerrado ni imponer flujos de trabajo.
                            Su objetivo es integrarse naturalmente con tus herramientas,
                            scripts y procesos existentes.
                        </p>

                        <p className="description secondary">
                            Una herramienta abierta, extensible y pensada para quienes
                            prefieren entender lo que usan en lugar de depender de
                            software opaco.
                        </p>

                    </div>

                    <div className="hero-image-skills">
                        <img src={raccoonImg} alt="Raccoon App" />
                    </div>

                </section>

                <section className="hero">

                    <div className="hero-image-skills">
                        <img src={raccoonImg} alt="Raccoon App" />
                    </div>

                    <div className="hero-text">

                        <h1>Transparente</h1>

                        <h2>Sin sorpresas</h2>

                        <p className="description">
                            El código fuente del proyecto está completamente disponible.
                            Puedes inspeccionarlo, auditarlo e incluso modificarlo según
                            tus necesidades. Sabes exactamente qué estás instalando:
                            sin software innecesario, sin componentes ocultos y sin
                            sorpresas desagradables.
                        </p>

                    </div>

                </section>

                <section className="hero-vertical">
                    <h1>Features</h1>

                    <p className="description">
                        Una aplicacion simple pero potente, con las mejores
                        caracteristicas para los desarrolladores
                    </p>

                    <div className="hero-tech-cards">
                        <div className="card">⚡ Fast native HTTP requests</div>
                        <div className="card">📊 Status, response time and size</div>
                        <div className="card">🧾 JSON viewer</div>
                        <div className="card">🎯 Minimal UI</div>
                        <div className="card">🪟 Sistema de ventanas</div>
                        <div className="card">🔐 Auth</div>
                        <div className="card">⚙️ Parámetros dinámicos</div>
                    </div>
                </section>

                <section className="hero-vertical">

                    <div className="hero-text">

                        <h1>Tech stack</h1>

                        <h2>Modernas y potentes</h2>

                        <p className="description">
                            La combinacion de las tecnologias web y bajo nivel, permiten
                            un estilo moderno sin perder potencia en el acceso a bajo nivel.
                            Permitiendo una mejor eficiencia libre del empaquetado de chromium
                        </p>

                    </div>

                    <div className="hero-tech-cards">
                        <div className="tech-card">
                            <img src={reactImg} alt="Raccoon App" />
                            <h1>React</h1>
                            <span>Front end moderno</span>
                        </div>
                        <div className="tech-card">
                            <img src={rustImg} alt="Raccoon App" />
                            <h1>Rust</h1>
                            <span>Seguro y eficiente</span>
                        </div>
                        <div className="tech-card">
                            <img src={tauriImg} alt="Raccoon App" />
                            <h1>Tauri</h1>
                            <span>Framewor ligero y eficiente</span>
                        </div>
                    </div>

                </section>

                <section className="hero-vertical">

                    <h1>Roadmap</h1>

                    <h2>Proximas mejoras</h2>

                    <p className="description">
                        Proximas funciones que estaran disponibles para la aplicacion,
                        puedes dejar una issue en el repositorio con tu propia sugerencia.
                    </p>

                    <div className="hero-tech-cards">
                        <div className="card">
                            Mejoras UI
                            <p className="card-sub">Refinamiento visual y UX</p>
                        </div>

                        <div className="card">
                            Historial
                            <p className="card-sub">Registro de peticiones</p>
                        </div>

                        <div className="card">
                            Descargar respuesta
                            <p className="card-sub">Manejo de descarga de un archivo con la respuesta</p>
                        </div>

                        <div className="card">
                            Manejo de Errores
                            <p className="card-sub">Mostrar errores ocurridos</p>
                        </div>

                        <div className="card">
                            Colleciones
                            <p className="card-sub">Permitir crear colleciones de peticiones</p>
                        </div>

                        <div className="card">
                            Variables de entorno
                            <p className="card-sub">Permitir crear variables de entorno</p>
                        </div>


                        <div className="card">
                            Guardado de peticiones
                            <p className="card-sub">Permitir guardar peticiones</p>
                        </div>

                    </div>
                </section>

                <section className="changelog">

                    <div className="changelog-card">

                        <h2>Download</h2>

                        <p className="project-description">
                            Puedes descaregar la aplicacion para multiples
                            sistemas operativos
                        </p>

                        <div className="project-features">
                            <span>🐧 Linux</span>
                            <span>🪟 Windows</span>
                            <span>🍎 macOS</span>
                        </div>

                        <NavLink
                            className="project-link"
                            to="/racoon/download"
                        >
                            Ver más →
                        </NavLink>
                    </div>

                </section>

                <section className="changelog">

                    <div className="project-card">

                        <h2>Changelog</h2>

                        <p className="project-description">
                            Puedes ver los cambios en el siguiente apartado
                        </p>

                        <NavLink
                            className="project-link"
                            to="/racoon/changelog"
                        >
                            Ver más →
                        </NavLink>
                    </div>

                </section>

                <section className="changelog">

                    <div className="project-card">

                        <h2>Acerca del proyecto</h2>

                        <p className="project-description">
                            Si te interesa saber mas acerda de este
                            busca aqui
                        </p>

                        <NavLink
                            className="project-link"
                            to="/racoon/about"
                        >
                            Ver más →
                        </NavLink>
                    </div>

                </section>


            </div>

        </>
    )
}