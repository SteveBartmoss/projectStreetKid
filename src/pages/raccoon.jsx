import { NavLink } from 'react-router-dom'
import raccoonImg from '../assets/raccoon.png'
import reactImg from '../assets/react.svg'
import rustImg from '../assets/rust-logo.svg'
import tauriImg from '../assets/tauri.png'
import { PartcilesSnake } from '../components/particles/particlesSnake'
import { PartcilesSnakeCanvas } from '../components/particles/particlesSnakeCanvas'
import { ParticlesSnakeRacional } from '../components/particles/particlesSnakeRacional'
import './raccoon.css'

export function Raccoon() {

    return (
        <>
            <ParticlesSnakeRacional>
                <div className="raccoon-container">
                    <section className="hero-main">
                        <div className="hero-text">
                            <h1>Raccoon</h1>
                            <p className="version">v1.0.0 latest</p>

                            <h2>Cliente REST ligero y nativo</h2>

                            <p className="description">
                                Una alternativa GNU simple para probar APIs REST.
                                Rápido, ligero y enfocado en lo esencial.
                            </p>

                            <a
                                href='https://github.com/SteveBartmoss/projectRacoon/releases/tag/v1.0.0'
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary"
                            >
                                Descargar
                            </a>
                        </div>

                        <div className="hero-image">
                            <img src={raccoonImg} alt="Raccoon App" />
                        </div>
                    </section>
                </div>
            </ParticlesSnakeRacional>
            <div className="raccoon-container">

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

                {/* FEATURES */}
                <section className="section">
                    <h2>Features</h2>
                    <div className="grid">
                        <div className="card">⚡ Fast native HTTP requests</div>
                        <div className="card">📊 Status, response time and size</div>
                        <div className="card">🧾 JSON viewer</div>
                        <div className="card">🎯 Minimal UI</div>
                        <div className="card">🪟 Sistema de ventanas</div>
                        <div className="card">🔐 Auth</div>
                        <div className="card">⚙️ Parámetros dinámicos</div>
                    </div>
                </section>

                <section className="hero">

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

                <section className="section">
                    <h2>Roadmap</h2>

                    <div className="grid">
                        <div className="card">
                            🎨 Mejoras UI
                            <p className="card-sub">Refinamiento visual y UX</p>
                        </div>

                        <div className="card">
                            📜 Historial
                            <p className="card-sub">Registro de peticiones</p>
                        </div>

                        <div className="card">
                            ⚙️ Descargar respuesta
                            <p className="card-sub">Manejo de descarga de un archivo con la respuesta</p>
                        </div>

                        <div className="card">
                            ⚙️ Manejo de Errores
                            <p className="card-sub">Mostrar errores ocurridos</p>
                        </div>

                        <div className="card">
                            ⚙️ Colleciones
                            <p className="card-sub">Permitir crear colleciones de peticiones</p>
                        </div>

                        <div className="card">
                            ⚙️ Variables de entorno
                            <p className="card-sub">Permitir crear variables de entorno</p>
                        </div>


                        <div className="card">
                            ⚙️ Guardado de peticiones
                            <p className="card-sub">Permitir guardar peticiones</p>
                        </div>

                    </div>
                </section>

                <section className="section">
                    <h2>Download</h2>

                    <div className="grid">
                        <div className="card">
                            🐧 Linux
                            <p className="card-sub">Disponible en Latest</p>

                            <a
                                href="https://github.com/SteveBartmoss/projectRacoon/releases/tag/v0.13.1"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                            >
                                Descargar
                            </a>
                        </div>

                        <div className="card">
                            🪟 Windows
                            <p className="card-sub">Disponible en Latest</p>

                            <a
                                href="https://github.com/SteveBartmoss/projectRacoon/releases/tag/v0.13.1"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                            >
                                Descargar
                            </a>
                        </div>

                        <div className="card">
                            🍎 macOS
                            <p className="card-sub">Disponible en Latest</p>

                            <a
                                href="https://github.com/SteveBartmoss/projectRacoon/releases/tag/v0.13.1"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                            >
                                Descargar
                            </a>
                        </div>
                    </div>
                </section>

                <section className="install">

                    <h2>Instalación en Linux</h2>

                    <div className="install-grid">

                        <div className="install-card">

                            <h3>🐧 Debian / Ubuntu</h3>

                            <p className="install-description">
                                Descarga el paquete <strong>.deb</strong> e instálalo con el siguiente comando:
                            </p>

                            <div className="code-block">
                                sudo dpkg -i racoon_0.1.0_amd64.deb
                            </div>

                            <p className="install-note">
                                Si hay errores de dependencias:
                            </p>

                            <div className="code-block">
                                sudo apt install -f
                            </div>

                        </div>

                        <div className="install-card">

                            <h3>📦 Otras distribuciones</h3>

                            <p className="install-description">
                                Usa el archivo <strong>AppImage</strong> (portable, sin instalación).
                            </p>

                            <ol className="steps">
                                <li>Descarga el archivo .AppImage</li>
                                <li>Hazlo ejecutable:</li>
                            </ol>

                            <div className="code-block">
                                chmod +x racoon_0.1.0_amd64.AppImage
                            </div>

                            <p className="install-note">Ejecuta la aplicación:</p>

                            <div className="code-block">
                                ./racoon_0.1.0_amd64.AppImage
                            </div>

                        </div>

                    </div>

                </section>

                <section className="changelog">

                    <h2>Changelog</h2>

                    <p>
                        Puedes ver los cambios en el siguiente apartado
                    </p>

                    <NavLink 
                        to="/racoon/changelog" 
                        className={({ isActive }) => 
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Change log
                    </NavLink>

                </section>

            </div>
        </>
    )

}