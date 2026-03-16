import { NavLink } from 'react-router-dom'
import './topbar.css'

export function TopBar(){

    return(
        <div className="top-bar">
            <div className='row'>
                <NavLink to={"/"}>Home</NavLink>
            </div>
            <div className='row'>
                <div>
                    <NavLink to={"/projects"}>Proyectos</NavLink>
                </div>
                <div>
                    <NavLink to={"/steve"}>Steve</NavLink>
                </div>
            </div>
        </div>
    )

}