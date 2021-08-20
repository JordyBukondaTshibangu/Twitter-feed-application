import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import TwitterFeedLogo from '../assets/TwitterFeedLogo.jpeg';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [sideBar, setSideBar] = useState(false)

    const closeSideBar = () => { setSideBar(false) }

    return (
        <>
            <div className="nav-logo">
                <Link to="/">
                    <img src={TwitterFeedLogo} alt="/" />
                </Link>
            </div>
            <div className="mobile-view" onClick = {() => setSideBar(!sideBar)}>
                <img src="https://i.pinimg.com/736x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg" alt="/"/>
            </div>
            {
                sideBar && ReactDOM.createPortal(<Sidebar toggle={closeSideBar} />, document.getElementById('side-bar'))
            }
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/users"> Users and followers </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
