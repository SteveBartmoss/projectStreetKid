import { NavLink } from 'react-router-dom'
import './topbar.css'

export function TopBar(){

    return(
        <div className="top-bar">
            <div className='row'>
                <NavLink className="nav-link" to={"/"}>Inicio</NavLink>
            </div>
            <div className='row'>
                <div className='row'>
                    <NavLink className="nav-link" to={"/projects"}>Proyectos</NavLink>
                </div>
                <div className='row'>
                    <NavLink className="nav-link" to={"/steve"}>Steve</NavLink>
                </div>
            </div>
        </div>
    )

}