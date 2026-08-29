import './racoon.css'

export function RacoonAbout() {

    return (
        <div className="raccoon-container">

            <section className="hero-download-vertical">

                <div className="hero-text">

                    <h1>Proyect Racoon</h1>

                    <h2>Cliente nativo, open source y ligero</h2>

                    <p className="description">
                        Surje de la mala experiencia al trata de trabajar con
                        un cliente rest en un ambiente de gnu como los ubuntu,
                        la idea de no poder instalar un programa para simplemente
                        probar un endpoint. (algo que se puede hacer con un simple
                        fetch) me parecia riducula
                    </p>

                    <p className="description">
                        Este software busca ser simple de instalar y facil de usar,
                        dejando de lado la necesidad de una empresa y enfocarse solo
                        en lo que el usuario necesita
                    </p>

                </div>


            </section>

            <section className="hero-download-vertical">

                <div className="hero-text">

                    <h1>Nada bajo la manga</h1>

                    <h2>Sin telemetria, sin iniciar sesion</h2>

                    <p className="description">
                        Siempre que uso un software "gratis" requiere que inicie sesion 
                        para usar alguna caractiristica o simplemente es gratis porque 
                        el usuario se convierte en el producto.
                    </p>

                    <p className="description">
                        Realmente es cansado que todo lo que se use hoy en dia te trate 
                        como si fueras un producto un experimento, por esa razon esta 
                        aplicacion no tiene ninguna telemetria programada, si requieres 
                        comprobarlo el codigo fuente esta disponible para auditarse. 
                        Lo unico importante es que el usuario pueda tener una herramienta 
                        que le ayude en su desarrollo.
                    </p>

                </div>


            </section>

            <section className="hero-download-vertical">

                <div className="hero-text">

                    <h1>Mejor uso de recursos</h1>

                    <h2>Sin empaquetado execisivo</h2>

                    <p className="description">
                        Tener una version de un navegador web (chromium) ejecutandose simplemente 
                        para usar una aplicacion no parece una buena idea, si bien herramientas 
                        como electron son buenas y cumplen con su funcion. No creo que sea la mejor 
                        manera de tener una aplicacion de escritorio.
                    </p>

                    <p className="description">
                        Las tecnologias de este proyecto tienen como objetivo mejorar el manejo de 
                        recursos para el usuario ofreciendo los siguientes puntos de mejora

                    </p>

                </div>

                <div className="hero-text">

                    <h2>Tamaño y rendimiento</h2>

                    <p className="description">
                        Instalador y peso en disco mucho menores: Tauri no empaqueta un navegador Chromium completo. 
                        Usa el motor WebView nativo del sistema operativo (WebKit en macOS/Linux, Edge WebView2 en Windows). 
                        Un “hola mundo” en Electron pesa ~150 MB, mientras que en Tauri puede rondar los 3-6 MB.
                    </p>

                    <p className="description">
                       Menor consumo de RAM: Cada ventana de Electron carga una instancia entera de Chromium. 
                       Tauri comparte el WebView del sistema, por lo que la memoria base es drásticamente menor. 
                       En aplicaciones reales, Tauri suele usar un 50-70% menos de RAM que Electron.
                    </p>

                    <p className="description">
                        Arranque más rápido: Al no tener que levantar un navegador completo, 
                        el tiempo de carga inicial es notablemente más corto, lo que mejora la percepción del usuario.
                    </p>

                </div>

                <div className="hero-text">

                    <h2>Seguridad</h2>

                    <p className="description">
                        Modelo de permisos estricto: Tauri te obliga a declarar explícitamente qué APIs nativas puede usar el frontend (sistema de archivos, red, shell…). 
                        No hay acceso implícito a Node.js ni al sistema operativo completo, lo que reduce la superficie de ataque.
                    </p>

                    <p className="description">
                       Aislamiento del renderizador: El frontend se ejecuta en un WebView con el contexto de seguridad del navegador, 
                       sin acceso directo al sistema. 
                       Electron, al incluir Node.js en el proceso renderer, puede exponer riesgos si no se configura con cuidado.
                    </p>

                </div>

                <div className="hero-text">

                    <h2>Mantenimiento y distribución</h2>

                    <p className="description">
                        Actualizaciones más ligeras: El instalador base es pequeño y los parches binarios (si usas el updater de Tauri) pueden ser mínimos, porque solo reemplazas la parte de Rust y los assets, no un Chromium entero.
                    </p>

                    <p className="description">
                        Sin dependencia de Node.js en producción: No necesitas empaquetar Node ni gestionar sus vulnerabilidades. El backend ya es un binario nativo autocontenido.
                    </p>

                    <p className="description">
                        Build cross-platform sencillo: Tauri genera binarios nativos para Windows, macOS y Linux desde un solo código base, sin complicaciones adicionales.
                    </p>

                </div>
                
            </section>
        </div>
    )
}