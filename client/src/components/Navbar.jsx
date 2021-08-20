import React from 'react'
import { FaSearch } from 'react-icons/fa' 
import { Link } from 'react-router-dom';
import TwitterFeedLogo from '../assets/TwitterFeedLogo.jpeg';

const Navbar = () => {
    return (
        <>
            <div className="nav-logo">
                <Link to="/">
                    <img src={TwitterFeedLogo} alt="/" />
                </Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="enter user name"/>
                <FaSearch />
            </div>
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
