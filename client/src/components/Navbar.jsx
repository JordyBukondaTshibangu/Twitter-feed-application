import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import TwitterFeedLogo from '../assets/TwitterFeedLogo.jpeg';
import BurgerIcon from '../assets/BurgerIcon.jpeg'
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
                <img src={BurgerIcon} alt="/"/>
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
