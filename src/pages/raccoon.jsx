import raccoonImg from '../assets/raccoon.png'

export function Raccoon(){

    return(
        <div>
            <div>
                <h1>Raccoon</h1>
            </div>
            <div>
                <h2>Cliente Rest ligero</h2>

                <p>
                    Un cliente ligero y nativo, que permite probar apis rest de forma simple y ademas 
                    es una alternativa gnu.
                </p>

                <img src={raccoonImg} />
                
            </div>
        </div>
    )

}