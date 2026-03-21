import raccoonImg from '../assets/raccoon.png'
import './raccoon.css'

export function Raccoon() {

    return (
        <div className="raccoon-container">

            <section className="hero">
                <div className="hero-text">
                    <h1>Raccoon</h1>
                    <p className="version">v0.1.0 pre-release</p>

                    <h2>Cliente REST ligero y nativo</h2>

                    <p className="description">
                        Una alternativa GNU simple para probar APIs REST.
                        Rápido, ligero y enfocado en lo esencial.
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
                    <div className="card">⚡ Fast native HTTP requests</div>
                    <div className="card">📊 Status, response time and size</div>
                    <div className="card">🧾 JSON viewer</div>
                    <div className="card">🎯 Minimal UI</div>
                </div>
            </section>

            <section className="section">
                <h2>Tech stack</h2>
                <div className="tags">
                    <span>React</span>
                    <span>Rust</span>
                    <span>Tauri</span>
                    <span>Reqwest</span>
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
                        🪟 Sistema de ventanas
                        <p className="card-sub">Multi-tabs y manejo de vistas</p>
                    </div>

                    <div className="card">
                        🔐 Auth
                        <p className="card-sub">Soporte para tokens y headers</p>
                    </div>

                    <div className="card">
                        ⚙️ Parámetros dinámicos
                        <p className="card-sub">Gestión avanzada de requests</p>
                    </div>

                    <div className="card">
                        📜 Historial
                        <p className="card-sub">Registro de peticiones</p>
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
                            href="https://github.com/SteveBartmoss/projectRacoon/releases/tag/v0.1.0"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary"
                        >
                            Descargar
                        </a>
                    </div>

                    <div className="card disabled">
                        🪟 Windows
                        <p className="card-sub">Próximamente</p>
                    </div>

                    <div className="card disabled">
                        🍎 macOS
                        <p className="card-sub">Próximamente</p>
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

        </div>
    )

}