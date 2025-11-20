import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <nav>
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/images/logo.png" alt="logo" />
                    <p>OBTION</p>
                </Link>
                <div className="links">
                    <Link className="signup" to="/signup">SignUp</Link>
                    <Link to="/login">Login</Link>
                    
                    <div className="ham-burger">
                        <h1 onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </h1>
                        <div 
                            className="ham-dropdown" 
                            id="ham-dropdown"
                            style={{ display: isMenuOpen ? 'block' : 'none' }}
                        >
                            <div className="drop-items">
                                <div className="ham-item">
                                    <Link to="/" onClick={closeMenu}>Home</Link>
                                </div>
                                <div className="ham-item">
                                    <Link to="/faq" onClick={closeMenu}>FAQs</Link>
                                </div>
                                <div className="ham-item">
                                    <Link to="/about" onClick={closeMenu}>About Us</Link>
                                </div>
                                <div className="ham-item">
                                    <Link to="/support" onClick={closeMenu}>Support</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;