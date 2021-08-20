import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({toggle}) => {
    return (
        <div className="side-bar">
            <ul>
                <li>
                    <Link to="/" onClick={toggle}>Home</Link>
                </li>
                <li>
                    <Link to="/users" onClick={toggle}>Users and Followers</Link>
                </li>
            </ul>
            <button onClick={toggle}>Close menu</button>
        </div>
    )
}

export default Sidebar
