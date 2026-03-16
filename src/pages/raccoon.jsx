import raccoonImg from '../assets/raccoon.png'

export function Raccoon(){

    return(
        <div>
            <div>
                <h1>Raccoon</h1>
            </div>
            <div>
                <h2>v 0.1.0 pre-release</h2>

                <h2>Cliente Rest ligero</h2>

                <p>
                    Un cliente ligero y nativo, que permite probar apis rest de forma simple y ademas 
                    es una alternativa gnu.
                </p>

                <img src={raccoonImg} />

                <h2>Featurues</h2>

                <ul>
                    <li>Fast native HTTP requests</li>
                    <li>Status, response time and size</li>
                    <li>JSON viewer</li>
                    <li>Minimal UI</li>
                </ul>

                <h2>Tech stack</h2>

                <ul>
                    <li>React</li>
                    <li>Rust</li>
                    <li>Tauri</li>
                    <li>Reqwest</li>
                </ul>

                <h2>RoadMap</h2>

                <ul>
                    <li>Mejoras UI</li>
                    <li>Sistemas de ventanas</li>
                    <li>Configuracion de Auth</li>
                    <li>Configuracion de parametros</li>
                    <li>Historial de peticiones</li>
                </ul>

                <h2>Download</h2>

                <p>
                    Por ahora las plataformas soportadas para la beta son las siguientes
                </p>

                <ul>
                    <li>Linux</li>
                </ul>

                <p>Descarga el pre-realse <a href='https://github.com/SteveBartmoss/projectRacoon/releases/tag/v0.1.0' rel="noreferrer" target="_blank" >aqui</a></p>
            </div>
        </div>
    )

}