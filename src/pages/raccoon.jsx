import raccoonImg from '../assets/raccoon.png'
import './raccoon.css'

export function Raccoon() {

    return (
        <div className="raccoon-container">

            <section className="hero">
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
                            <span className="version-badge">v1.7.0</span>
                            <span className="version-date">Latest</span>
                        </div>

                        <p className="changelog-description">
                            Mejoras internas para la aplicacion, se mejora el manejo de las tabs. Se dividio
                            la informacion para las tabs y para las request.
                        </p>

                        <ul className="changelog-features">
                            <li>🎨 Icono personalizado para la aplicacion</li>
                            <li>🎨 Se removio por completo el scroll vertial y horizontal</li>
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
                            <span className="version-badge">v1.0.0</span>
                            <span className="version-date">Latest</span>
                        </div>

                        <p className="changelog-description">
                            Mejoras visuales para el branding de la aplicacion y mejor aspecto para el usuario.
                        </p>

                        <ul className="changelog-features">
                            <li>🎨 Icono personalizado para la aplicacion</li>
                            <li>🎨 Se removio por completo el scroll vertial y horizontal</li>
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
                            <span className="version-badge">v0.13.2</span>
                            <span className="version-date">pre-release</span>
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
                            <span className="version-date">pre-release</span>
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