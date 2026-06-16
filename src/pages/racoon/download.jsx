import './racoon.css'
import windowsImg from '../../assets/windows.png'
import linuxImg from '../../assets/linux.png'
import appleImg from '../../assets/apple.png'

export function RacoonDownload() {

    return (
        <>
            <div className="raccoon-container">

                <section className="hero-download-vertical">

                    <div className="hero-text">

                        <h1>Descargar Racoon</h1>

                        <h2>Cliente nativo, open source y ligero</h2>

                        <p className="description">
                            La combinacion de las tecnologias web y bajo nivel, permiten
                            un estilo moderno sin perder potencia en el acceso a bajo nivel.
                            Permitiendo una mejor eficiencia libre del empaquetado de chromium
                        </p>

                    </div>

                    <div className="hero-download-cards">
                        <div className="download-card">
                            <img src={windowsImg} alt="Raccoon App" />
                            <span>v1.0.0 latest</span>
                            <a
                                href="https://github.com/SteveBartmoss/projectRacoon/releases/tag/v0.13.1"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                            >
                                Descargar
                            </a>
                        </div>
                        <div className="download-card">
                            <img src={linuxImg} alt="Raccoon App" />
                            <span>v1.0.0 latest</span>
                            <a
                                href="https://github.com/SteveBartmoss/projectRacoon/releases/tag/v0.13.1"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                            >
                                Descargar
                            </a>
                        </div>
                        <div className="download-card">
                            <img src={appleImg} alt="Raccoon App" />
                            <span>v1.0.0 latest</span>
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