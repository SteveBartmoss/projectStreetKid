import './racoon.css'

export function RacoonDownload() {

    return (
        <>
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


                </section>

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


                </section>

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
            </div>
        </>
    )
}