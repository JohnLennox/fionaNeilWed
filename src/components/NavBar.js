import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    const [isVisible, setIsVisible] = useState(false);

    const checkVisibility = () => {
        const scrollHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        setIsVisible(window.scrollY >= scrollHeight || screenWidth <= 700);
    };

    useEffect(() => {
        // Add scroll and resize event listeners
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);

        // Initial check
        checkVisibility();

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    const navStyle = {
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 1000,
        whiteSpace: 'nowrap' // Ensures menu items are on a single line
    };

    const navLinkStyle = {
        position: 'relative',
        paddingLeft: '10px',
        paddingRight: '10px'
    };

    const navLinkAfterStyle = {
        content: "'|'",
        position: 'absolute',
        right: '-10px',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center'
    };

    const handleNavClick = () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    };

    return (
        <div style={navStyle}>
            <nav className="navbar container-fluid navbar-expand-lg justify-content-center navbar-light bg-light sticky-top">
                <a className="navbar-brand d-flex w-50 me-auto" style={{ paddingLeft: '10px', fontFamily: "Playfair Display" }} href="#">Fiona & Neil</a>
                <button className="navbar-toggler" type="button" style={{ marginRight: '10px' }} data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" style={{ marginLeft: '10px' }} id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-center">
                        <li className="nav-item" style={navLinkStyle}><a className="nav-link" href="#home" onClick={handleNavClick}>Home</a><span style={navLinkAfterStyle}></span></li>
                        <li className="nav-item" style={navLinkStyle}><a className="nav-link" href="#gallery" onClick={handleNavClick}>Gallery</a><span style={navLinkAfterStyle}></span></li>
                        <li className="nav-item" style={navLinkStyle}><a className="nav-link" href="#wedding" onClick={handleNavClick}>Wedding Details</a><span style={navLinkAfterStyle}></span></li>
                        <li className="nav-item" style={navLinkStyle}><a className="nav-link" href="#getting-there" onClick={handleNavClick}>Getting There</a><span style={navLinkAfterStyle}></span></li>
                        <li className="nav-item" style={navLinkStyle}><a className="nav-link" href="#gifts" onClick={handleNavClick}>Gifts</a><span style={navLinkAfterStyle}></span></li>
                        <li className="nav-item" style={navLinkStyle}><a className="nav-link" href="#rsvp" onClick={handleNavClick}>RSVP</a><span style={navLinkAfterStyle}></span></li>
                        <li className="nav-item" style={navLinkStyle}><a className="nav-link" href="#contact" onClick={handleNavClick}>Contact Details</a></li>
                    </ul>
                </div>
                <div className="w-50 justify-content-end" />
            </nav>
        </div>
    );
}

export default NavBar;
