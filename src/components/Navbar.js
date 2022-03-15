import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome } from "react-icons/fa";

function Navbar() {
    const [click, setClick] = useState(false);

    return (
        
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/* logo + icon */}
                    <Link to='/' className='navbar-logo' >
                        <FaHome />
                    </Link>
                   
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <Link to='/celsius' className='nav-links' >
                                Celsius
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link
                                to='/hour'
                                className='nav-links'
                            >
                                Hour 
                            </Link>
                            {/* {dropdown && <Dropdown />} */}
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/length'
                                className='nav-links'
                            >
                                Length
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/bytes'
                                className='nav-links'
                            >
                                Bytes
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        
    );
}

export default Navbar;