import { NavLink } from 'react-router-dom'
import './css/changelog.css'

export function RacoonChangeLog() {

    return (
        <>
            <div className="raccoon-container">
                <section className="changelog">
                    <h2>Changelog</h2>

                    <NavLink 
                        to="/racoon" 
                        className={({ isActive }) => 
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Volver al proyecto
                    </NavLink>

                    <div className="changelog-list">

                        <div className="changelog-item">

                            <div className="changelog-header">
                                <span className="version-badge">v1.19.8</span>
                                <span className="version-date">pre-release</span>
                            </div>

                            <p className="changelog-description">
                                Mejoras de funcionalidades para la aplicacion, algunas de las novedades,
                                son el soporte para comandos y funciones de menu lis en las tabs, ademas de
                                correcion de bugs
                            </p>

                            <ul className="changelog-features">
                                <li>⚙️ Se implementa una funcion para leer y guardar un archivo de configuracion de la aplicacion desde el directorio predeterminado</li>
                                <li>⚙️ Se implementa la funcion para leer la configuracion de la aplicacion desde rust</li>
                                <li>⚙️ Se guarda la configuracion para la aplicacion en el slice de la aplicacion</li>
                                <li>⚙️ Se implementa el componente CommandObserver para leer los comandos</li>
                                <li>⚙️ Se implementa el componente de menu helper para mostrar un menu list desde la tab</li>
                                <li>⚙️ Se agrega al menu la ayuda visual de los shotcuts</li>
                                <li>⚙️ Se implementa una mejora para la solucion del bug, se implementa use memo para mejorar la renderizacion de la preview del url en la aplicacion</li>
                                <li>🎨 Se implementa el componente para mostrar un tooltip en la aplicacion</li>
                                <li>🎨 Se agrega la funcion para limpiar la respuesta</li>
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
                                <span className="version-badge">v1.13.4</span>
                                <span className="version-date">pre-release</span>
                            </div>

                            <p className="changelog-description">
                                Mejoras de funcionalidades para la aplicacion, se puede crear una nueva ventana,
                                se puede guardar la informacion de una peticion a un json, se permite importar informacion
                                a una peticion desde un json, se corrigen los bugs de las tabs, se corrigen errores
                            </p>

                            <ul className="changelog-features">
                                <li>🎨 Se permite crear una ventana extra de la aplicacion</li>
                                <li>⚙️ Se permite exportar la informacion de una peticion a un archivo json</li>
                                <li>⚙️ Se permite importar informacion a una peticion desde una archivo json</li>
                                <li>⚙️ Se permite importar informacion a una peticion desde una archivo json</li>
                                <li>⚙️ Se corrigen bugs en las tabs</li>
                                <li>⚙️ Se corrige un bug en el funcionamiento del menu de la aplicacion</li>
                                <li>🎨 Se realizan mejoras visuales en el menu y el logo de la aplicacion</li>
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
                                <span className="version-badge">v1.10.0</span>
                                <span className="version-date">pre-release</span>
                            </div>

                            <p className="changelog-description">
                                Mejoras funcionalidades para la aplicacion, se implementa el manejo de headers,
                                se implementa el manejo de errores, se implementa un nuevo componenre para la
                                visualizacion de los errores, se mejora el acomo de la aplicacion
                            </p>

                            <ul className="changelog-features">
                                <li>⚙️ Se pueden mandar los headers en la peticion</li>
                                <li>⚙️ Deteccion de errores al momento de enviar la peticion</li>
                                <li>⚙️ Nuevo componene para mostrar los errores</li>
                                <li>🎨 Se mejora aun mas el scroll que tenia la aplicacion, se
                                    trabaja con una plantilla mejor acomodada
                                </li>
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
                                <span className="version-badge">v1.7.0</span>
                                <span className="version-date">pre-release</span>
                            </div>

                            <p className="changelog-description">
                                Mejoras internas para la aplicacion, se mejora el manejo de las tabs. Se dividio
                                la informacion para las tabs y para las request, se implementa una mejora para
                                descargar la respuesta, se implementa una mejora para hacer los params opcionales.
                            </p>

                            <ul className="changelog-features">
                                <li>⚙️ Mejor soporte para al manejo de las tabs</li>
                                <li>⚙️ Funcion para descargar la respuesta desde la aplicacion</li>
                                <li>⚙️ Se implemento la funcion para hacer los params opcionales</li>
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
        </>
    )
}