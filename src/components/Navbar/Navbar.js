import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../context/UserProvider';
import './Navbar.css';

const Navbar = () => {

    const user = useContext(userContext);

    return(
        <div className="nav-wrap">
            <nav className="nav-bar">
                <span className="logo"><Link to="/">Photo App</Link></span>
                <span className="spacer"></span>
                <ul>
                    { user && <li className="nav-link"><Link to="/logout">Log out</Link></li>}
                    { !user && <li className="nav-link"><Link to="/login">Log in</Link></li>}
                    { !user && <li className="nav-link"><Link to="/signup">Sign up</Link></li>}
                    <li className="nav-link"><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar;