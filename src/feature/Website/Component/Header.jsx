import React from 'react'
import { NavLink , Link } from 'react-router-dom'

function Header({title}) {
    return (
        <div>
            <div className="p-8 bg-orange text-black text-center">
                <h1>{title}</h1>
                <p>Admin</p>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add_user">Add Data</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header