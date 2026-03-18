import { NavLink } from "react-router-dom";
import { Card } from "../components/card/card";
import { Box } from "../components/containers/containers";


export function Projects(){

    return(
        <div>
            <div>
                <h1>Proyectos actuales</h1>
            </div>
            <Box styles={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "70%",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Card>
                    <h1>Racoon</h1>
                    <p>
                        Cliente Rest ligero y nativo
                    </p>

                    <NavLink to={"/raccoon"}>Leer mas</NavLink>
                </Card>
            </Box>
        </div>
    )

}