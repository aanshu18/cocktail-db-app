import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

const Navbar = () => {
    return (
       <nav className="navbar">
           <div className="navbar-center">
                <Link to ="/">
                    <img src={logo} alt="cocktailDb_logo" className="logo"/>
                    

                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to ="/"> Home </Link>
                    </li>

                    <li to ='/About'>
                        <Link to ="/"> About </Link>
                    </li>

                </ul>






           </div>
       </nav>
    );
}

export default Navbar;