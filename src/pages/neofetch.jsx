import raccoonImg from '../assets/raccoon.png'
import './neofetch.css'

export function NeoFetch() {

    return (
        <div className="raccoon-container">

            <section className="hero">
                <div className="hero-text">
                    <h1>Neofetch</h1>
                    <p className="version">v1.2.3</p>

                    <h2>Cliente HTTP minimalista para JavaScript moderno</h2>

                    <p className="description">
                        Librería diseñada para simplificar las peticiones 
                        HTTP en aplicaciones JavaScript modernas, manteniendo el control total 
                        sobre Fetch API sin introducir dependencias pesadas.
                    </p>

                    <a
                        href='https://github.com/SteveBartmoss/projectRacoon/releases/tag/v0.1.0'
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

            {/* FEATURES */}
            <section className="section">
                <h2>Features</h2>
                <div className="grid">
                    <div className="card">⚡ Request & Response Interceptors</div>
                    <div className="card">📊 Error Interceptors</div>
                    <div className="card">🧾 Automatic JSON parsing</div>
                    <div className="card">🎯 Timeout control with AbortController</div>
                    <div className="card">🎯 Request cancellation support</div>
                    <div className="card">🎯 Signal merging for advanced abort handling</div>
                    <div className="card">🎯 Consistent error normalization</div>
                    <div className="card">🎯 Lightweight & dependency-free</div>
                    <div className="card">🎯 Native Fetch performance</div>
                </div>
            </section>

            <section className="section">
                <h2>Tech stack</h2>
                <div className="tags">
                    <span>JavaScript (ES2022)</span>
                    <span>Fetch API</span>
                    <span>AbortController</span>
                    <span>npm ecosystem</span>
                    <span>Zero dependencies</span>
                    
                </div>
            </section>

            <section className="section">
                <h2>Roadmap</h2>

                <div className="grid">
                    <div className="card">
                        🎨 Uso de instancia
                        <p className="card-sub">Instance-based clients</p>
                    </div>

                    <div className="card">
                        🪟 Configuracion
                        <p className="card-sub">BaseURL configuration</p>
                        <p className="card-sub">Default configuration system</p>
                    </div>

                    <div className="card">
                        🔐 Resilencia
                        <p className="card-sub">Retry strategy</p>
                    </div>

                    <div className="card">
                        ⚙️ Optimizacion
                        <p className="card-sub">Request caching</p>
                        <p className="card-sub">TypeScript typings</p>
                    </div>

                    <div className="card">
                        📜 Personalizacion
                        <p className="card-sub">Middleware ecosystem</p>
                        <p className="card-sub">Plugin system</p>
                    </div> 
                </div>
            </section>

            <section className="section">
                <h2>Download</h2>

                <div className="grid">
                    <div className="card">
                        🐧 Linux
                        <p className="card-sub">Disponible en pre-release</p>

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
                        <p className="card-sub">Disponible en pre-release</p>

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
                        <p className="card-sub">Disponible en pre-release</p>

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

                <div className="changelog-list">

                    <div className="changelog-item">

                        <div className="changelog-header">
                            <span className="version-badge">v0.13.2</span>
                            <span className="version-date">Latest</span>
                        </div>

                        <p className="changelog-description">
                            Mejoras visuales en funcionalidades del cliente y experiencia de usuario.
                        </p>

                        <ul className="changelog-features">
                            <li>🎨 Colores en estatus de la respuesta</li>
                            <li>🎨 Colores en los encabezados de la tab</li>
                            <li>🪟 Mejor acomodo en los elementos visuales de la aplicacion</li>
                            <li>⚙️ Archivos para la aplicacion en windows y macos</li>
                        </ul>

                        <a
                            href="https://github.com/SteveBartmoss/projectRacoon/releases"
                            target="_blank"
                            rel="noreferrer"
                            className="changelog-link"
                        >
                            Ver release →
                        </a>

                    </div>

                    <div className="changelog-item">

                        <div className="changelog-header">
                            <span className="version-badge">v0.9.0</span>
                            <span className="version-date">Latest</span>
                        </div>

                        <p className="changelog-description">
                            Mejoras importantes en funcionalidades del cliente y experiencia de usuario.
                        </p>

                        <ul className="changelog-features">
                            <li>⚙️ Soporte para parámetros dinámicos</li>
                            <li>🔐 Soporte para autenticación por token</li>
                            <li>🪟 Manejo de múltiples tabs</li>
                            <li>🎨 Mejoras en la interfaz</li>
                        </ul>

                        <a
                            href="https://github.com/SteveBartmoss/projectRacoon/releases"
                            target="_blank"
                            rel="noreferrer"
                            className="changelog-link"
                        >
                            Ver release →
                        </a>

                    </div>

                </div>

            </section>

        </div>
    )
}