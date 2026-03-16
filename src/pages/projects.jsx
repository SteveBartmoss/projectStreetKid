import { NavLink } from "react-router-dom";
import { Card } from "../components/card/card";


export function Projects(){

    return(
        <div>
            <div>
                <h1>Proyectos actuales</h1>
            </div>
            <div>
                <Card>
                    <h1>Racoon</h1>
                    <p>
                        Cliente Rest ligero y nativo
                    </p>

                    <NavLink to={"/raccoon"}>Leer mas</NavLink>
                </Card>
            </div>
        </div>
    )

}